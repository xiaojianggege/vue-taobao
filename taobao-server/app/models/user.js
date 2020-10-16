// models层 创建tao-bao数据库的user表
const mongoose = require('mongoose') // 引入mongoose
const Schema = mongoose.Schema 
const UserSchema = new Schema({
  userId: {
    type: String,
    required: true,
    unique: true,
  },
  userName: {
    type: String
  }
}, {collection: 'user', versionKey: false})

module.exports = mongoose.model('user', UserSchema)




