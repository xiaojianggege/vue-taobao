import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '../static/css/reset.styl' // 引入reset文件 清除所有标签的默认样式

import { Search, Toast } from 'vant';
Vue.use(Search).use(Toast);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
