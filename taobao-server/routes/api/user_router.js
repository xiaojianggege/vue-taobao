// 后端路由层  提供接口
const Router = require('koa-router') // 引入koa-router
const user_controller = require('./../../app/controllers/user_controller') // 引入控制层 对请求做响应的操作
const router = new Router()

router.post('/login', user_controller.login)
router.post('/register', user_controller.register)
router.get('/channel', user_controller.getChannel)
module.exports = router