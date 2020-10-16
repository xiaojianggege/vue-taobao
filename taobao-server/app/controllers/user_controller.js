// 后端控制层 对路由层做相应的操作

// 引入要操作的数据库
const user_col = require('../models/user')
const password_col = require('../models/password')
const { v1: uuidv1} = require('uuid') // 引入uuid 给每个注册用户设置一个时间戳的userId
const md5 = require('md5') // 使用md5给每个用户密码进行加密

// 登录
const login = async (ctx, next) => {
  
}





// 注册
const register = async (ctx, next) => {
  const req = ctx.request.body // 获取用户传递来的数据
  // 先对数据库进行查询 是否已经存在要注册的用户名
  const query = await user_col.findOne({
    userName: req.userName
  },{
    __v: 0,
    _id: 0
  })
  ctx.status = 200
  if(query) {
    ctx.body = {
      status: 0,
      msg: '用户名已存在！',
      data: 'error'
    }
    return
  }
  const useId = uuidv1()
  const hash = md5(req.password)
  const addUser_col = user_col.create({
    userId,
    userName: req.userName
  })
  const addPassword_col =  password_col.create({
    userId,
    hash 
  })
  if(addUser_col && addPassword_col) {
    ctx.body = {
      status: 1,
      msg: '成功创建用户',
      data: req.userName
    }
  } else {
    ctx.body = {
      status: 0,
      msg: '数据库存储失败！',
      data: 'error'
    }
  }

}
module.exports = {
  login,
  register
}