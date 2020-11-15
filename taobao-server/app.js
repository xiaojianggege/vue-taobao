// 后端的入口文件 类似于前端的main.js

const Koa = require('koa') // 引入koa框架 

const cors = require('koa2-cors') // 引用koa2-cors，处理跨域问题
const bodyparser = require('koa-bodyparser') // 参数解析
const mongoose = require('mongoose') // 连接mongoDB

const config = require('./config')  // 引入配置文件

const app = new Koa() // 创建一个koa实例运行服务端

// 建立mongodb连接
mongoose.connect(config.db, {useNewUrlParser: true}, (err) => {
  if(err) {
    console.error(err)
  } else {
    console.log('成功连接数据库');
  }
})

app.use(cors()) // 允许任何条件的跨域
app.use(
  bodyparser({
    enableTypes: ['json', 'form', 'text']
  })
)

const user_router = require('./routes/api/user_router')

app
  .use(user_router.routes()) // 启动路由
  .use(user_router.allowedMethods()) // 根据ctx.status, 设置响应头


app.listen(config.port, () => {
  console.log('成功运行后端服务');
})