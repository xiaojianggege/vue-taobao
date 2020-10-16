// models层 创建password表
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const passwordSchema = new Schema({
  userId: {
    type: String,
    required: true,
    unique: true
  },
  hash: {
    type: String
  }
}, {collection: 'password', versionKey: false})

module.exports = mongoose.model('password', passwordSchema)
