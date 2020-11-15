// 用来封装http
import axios from 'axios'
import Vue from 'vue';
import { Toast } from 'vant';

Vue.use(Toast);

axios.defaults.baseURL = 'http://localhost:3000'
axios.defaults.timeout = 10000 // axios请求全局配置



axios.interceptors.response.use(
  res => {
    if(res.data.code == 0) {
      Toast.fail(res.data.msg)
      return Promise.reject(res.data)
    }
    return res.data
  },
  err => {
    Toast.fail('服务器异常')
    return Promise.reject(err)
  }
)

// 获取channel数据
function fetchGet(url, params = '') {
  return new Promise((resolve, reject) => {
    axios.get(url, {
        params
      })
      .then(res => {
        resolve(res)
      },
      err => {
        reject(err)
      })
      .catch(err => {
        reject(err)
      })
  })
}


// 用户登录
function login(url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params).then(res => {
      console.log(res.token);
      sessionStorage.setItem('Token', res.token) // 登录成功后将token存储在sessionStorage之中
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}

// 用户注册
function register(url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params).then(res => {
      sessionStorage.setItem('Token', res.token) // 登录成功后将token存储在sessionStorage之中
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
} 

export default {
  Channel(params) {
    return fetchGet('/channel', params)
  },
  Login(params) {
    return login('/login', params)
  },
  Register(params) {
    return register('/register', params)
  }
}

