<template>
  <div id="login">
    <div class="title">{{isRegister? '亲，欢迎登录' : '手机号注册'}}</div>
    <div class="title_info">
      <span>{{isRegister? '没有淘宝账户？' : '亲，欢迎注册淘宝账户'}}</span>
      <span v-show="isRegister" class="register" @click="register">立即注册</span>
    </div>
    <div class="input">
      <input v-if="isRegister" type="text" v-model="userName" placeholder="请输入手机号码/会员名/邮箱">
      <input v-else  v-model="userName" type="text" placeholder="请输入手机号码">
      <input type="text" placeholder="请输入密码" v-model="password">
    </div>
    <div v-if="isRegister" class="comfirm_btn" @click="login">确认登录</div>
    <div v-else class="comfirm_btn" @click="ToRegister">确认注册</div>
  </div>
</template>
<script>
import api from '@/api/index.js'
export default {
  data() {
    return {
      isRegister: true,
      userName: undefined,
      password: undefined
    }
  },
  methods: {
    register() {
      this.isRegister = !this.isRegister
    },
    login() {
      api.Login({
        userName: this.userName,
        password: this.password
      }).then(res => {
        console.log(res);
      })
    },
    ToRegister() {
      api.Register({
        userName: this.userName,
        password: this.password
      }).then(res => {
        console.log(res);
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
#login
  padding 20px
  letter-spacing 1px
  font-size 15px
  .title
    font-size 28px
    margin 100px 0 20px 0
    color #000000
  .title_info
    margin-bottom 40px
    // font-size 15px
    color #a4a4a4
    .register
      color #FF4400
  .input
    border-bottom 0.5px solid #a4a4a4
    padding 5px 0
    input
      width 100%
      caret-color #FF4400
    > input:last-child
      margin-top 6px
  .comfirm_btn
    margin-top 40px
    width 100%
    height 38px
    text-align center
    line-height 38px
    border-radius 20px
    color #fff
    background-image linear-gradient(to right, #FF8F44, #FF3333 )        
</style>
