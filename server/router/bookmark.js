const Router = require('koa-router')
const router = new Router({ prefix: '/bookmark' })
const {
  getBookmarks, createBookmark, removeBookmark, editBookmark, parseBookmarks
} = require('../controllers/bookmark')

router
  .post('/', createBookmark) // 创建书签
  .get('/list', getBookmarks) // 获取书签列表
  .put('/:id', removeBookmark) // 修改书签
  .delete('/:id', removeBookmark) // 删除书签
  .post('/parse', parseBookmarks) // 解析书签

module.exports = router
