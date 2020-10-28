// 用来封装http
import axios from 'axios'
import Vue from 'vue';
import { Toast } from 'vant';

Vue.use(Toast);

axios.defaults.baseURL = 'http://localhost:3000'
axios.defaults.timeout = 10000 // axios请求全局配置

axios.interceptors.response.use(
  res => {
    if(res.data.code !== 1) {
      Toast.fail('网络异常')
      return Promise.reject(res)
    }
    return res.data
  },
  err => {
    Toast.fail('服务器异常')
    return Promise.reject(err)
  }
)
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

export default {
  Channel(params) {
    return fetchGet('/channel', params)
  }
}

