
module.exports = (sequelize, dataTypes) => {
  const Bookmark = sequelize.define(
    'bookmark', {
      id: {
        type: dataTypes.INTEGER(11),
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: dataTypes.STRING(255),
      },
      url: {
        type: dataTypes.STRING(255),
      },
      image: {
        type: dataTypes.STRING(1234), // 网站缩略图
      },
      introduction: {
        type: dataTypes.STRING(255),
      },
      parent_id: {
        type: dataTypes.INTEGER(11),
      },
      is_bookmark: {
        type: dataTypes.BOOLEAN, // 是否是书签
      }
    }
  )
  return Bookmark
}
