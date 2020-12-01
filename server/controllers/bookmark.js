const Joi = require('joi')
const axios = require('axios')
const path = require('path')
const cheerio = require('cheerio')

const { bookmark: BookmarkModel } = require('../models')
const fs = require('fs')
const fsPromises = fs.promises
const { uploadPath, outputPath, findOrCreateFilePath, decodeFile, generateFile } = require('../utils/file')
const { join } = require('path')

// 上传图片
async function upload (ctx) {
  const file = ctx.request.files.file
  console.log('upload -> ctx.request', ctx.request.files)
  console.log('upload -> file', file)

  await findOrCreateFilePath(file.path)
  const upload = file => {
    console.log('fs', fs)
    const reader = fs.createReadStream(file.path) // 创建可读流
    const fileName = `${file.name.split('.')[0]}${new Date().getTime()}.${file.name.split('.')[1]}`
    console.log('upload -> fileName', fileName)
    const filePath = `${uploadPath}${path.sep}${fileName}`
    const upStream = fs.createWriteStream(filePath)
    console.log('文件名', fileName)
    reader.pipe(upStream)

    reader.on('end', function () {
      console.log('文件路径', filePath)
      console.log('上传成功')
    })
    return filePath
  }
  return Array.isArray(file) ? file.forEach(it => upload(it)) : upload(file)
}
// 解析html
function parse(html) {
  // 加载html，使用常用的$符号
  var $ = cheerio.load(html)

  // 获取最外层的dt标签
  var $dl = $('dl').first()
  var $dt = $dl.children('dt').eq(0)

  // 从dt开始遍历dom树，生成对象
  var obj = foo($dt)

  // 将对象转化为json字符串，添加额外参数使json格式更易阅读
  var s = JSON.stringify(obj, null, 4)

  // 将json字符串写入json文件
  fs.writeFileSync('output.json', s)

  function foo($dt) {
    // h3标签为文件夹名称
    var $h3 = $dt.children('h3')

    if ($h3.length === 0) {
      // a标签为网址
      var $a = $dt.children('a')

      // 返回该书签的名称和网址组成的对象
      return $a.length > 0 ? {'name': $a.text(), 'href': $a.attr('href')} : null
    }

    var h3 = $h3.text().trim()
    var arr = []
    var obj = {}

    // 获取下一级dt标签集合
    var $dl = $dt.children('dl')
    var $dtArr = $dl.children('dt')
    for (var i = 0; i < $dtArr.length; i++) {
      // 遍历下一级dt标签
      var tmp = foo($dtArr.eq(i))

      // 将返回的对象push至子文件数组
      arr.push(tmp)
    }

    // 创建文件夹与子文件数组的键值对
    obj[h3] = arr

    // 返回该对象
    return obj
  }
  return s
}

class BookmarkController {
  // 获取网站列表
  static async getBookmarks (ctx) {
    const { userId, page, pageSize } = ctx.query
    const list = await BookmarkModel.findAndCountAll()
    ctx.response.body = list
  }
  // 创建书签
  static async createBookmark (ctx) {
    console.log('BookmarkController -> createBookmark -> ctx.request.body', ctx.request.body)
    const filePath = ctx.request.files ? await upload(ctx) : undefined
    const validator = ctx.validate(ctx.request.body, {
      name: Joi.string(), // 网站名称
      url: Joi.string(), // 网站链接
      introduction: Joi.string(), // 网站介绍
      is_bookmark: Joi.boolean(), // 是否是书签
      parent_id: Joi.number(), // 父栏目id
    })
    if (validator) {
      const { name, url, introduction, is_bookmark, parent_id } = ctx.request.body
      BookmarkModel.create({
        image: filePath,
        name: name,
        url: url,
        introduction: introduction,
        parent_id: parent_id || -1,
        is_bookmark: is_bookmark
      })
      ctx.throw(200, '上传成功')
    }
  }
  // 上传书签
  static async editBookmark (ctx) {
    const filePath = ctx.request.files ? await upload(ctx) : undefined
    const validator = ctx.validate(ctx.request.body, {
      userId: Joi.number(), // 用户 id
    })
    if (validator) {
      const { userId } = ctx.request.body
      BookmarkModel.create({
        image: filePath,
        userId: userId
      })
      ctx.throw(200, '上传成功')
    }
  }
  // 删除书签
  static async removeBookmark (ctx) {
    const validator = ctx.validate(ctx.request.body, {
      userId: Joi.number(),
      id: Joi.number(),
    })
    if (validator) {
      const { userId, id } = ctx.request.body
      BookmarkModel.destroy({
        where: { userId: userId, id: id }
      })
      ctx.throw(200, '删除成功')
    }
  }
  // 解析书签列表
  static async parseBookmarks(ctx) {
    const file = ctx.request.files.file

    function getBookmarks() {
      return new Promise((resolve, reject) => {
        const bookMarks = {}
        fs.readFile(file.path, function(err, data) {
          if (err) return reject(err)
          const result = parse(data)
          // console.log('BookmarkController -> parseBookmarks -> result', {result: result})
          return resolve(result)
        })
      })
    }
    const results = await getBookmarks()
    ctx.response.body = results
  }
}
module.exports = BookmarkController
