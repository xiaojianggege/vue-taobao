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
  console.log(req);
  const query = await user_col.findOne({
    userName: req.userName
  },{
    __v: 0,
    _id: 0
  })
  ctx.status = 200
  if(query) {
    ctx.body = {
      code: 0,
      msg: '用户名已存在！',
    }
    return
  }
  const useId = uuidv1()
  const newUser = await user_col.create({
    userId,
    userName: req.userName
  })
  // const newUser_password =  password_col.create({
  //   userId,
  //   hash 
  // })
  if(newUser) {
    const hash = await md5(req.password)
    const newPass = await password_col.create({
       userId,
       hash 
    })
    if(newPass) {
      ctx.body = {
        code: 1,
        msg: '用户注册成功',
        data: newUser
      }
    } else{
      ctx.body = {
        code: 0,
        msg: '密码存储失败！'
      }
    }
    
  } else {
    ctx.body = {
      code: 0,
      msg: '用户注册失败！'
    }
  }

}
module.exports = {
  login,
  register
}