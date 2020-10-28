// model层 创建channel表
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ChannelSchema = new Schema({
  title: {
    type: String
  },
  pic: {
    type: String
  }
}, {collation:'channel',versionKey: false})
const collationName = 'channel'
module.exports = mongoose.model('channel', ChannelSchema, collationName)