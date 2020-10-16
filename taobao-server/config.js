// 配置文件

module.exports = {
  port: 3000, // 后端运行端口
  db: 'mongodb://localhost:27017/tao-bao', // 后端所用的数据库
  saltTime: 3 // 加盐次数， 用户密码加密次数
}