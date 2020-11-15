const jwt = require('jsonwebtoken')
const secret = "654321ABCDEFEE" // 撒盐
const createToken = async function(info) {
  const token = await jwt.sign(info, secret, {
    expiresIn: 60 * 60 * 15
  })
  return token
}

const verifyToken = function(token) {
  return new Promise((resolve, reject) => {
    jwt.verify(token, secret, (err, res) => {
      if(err) {
        console.log(err);
        reject(err)
      } else resolve(res)
    })
  })
}

module.exports = {
  createToken,
  verifyToken
}