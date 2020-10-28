<template>
  <div id="login">
    <div class="title">{{isRegister? '亲，欢迎登录' : '手机号注册'}}</div>
    <div class="title_info">
      <span>{{isRegister? '没有淘宝账户？' : '亲，欢迎注册淘宝账户'}}</span>
      <span v-show="isRegister" class="register" @click="register">立即注册</span>
    </div>
    <div class="input">
      <input v-if="isRegister" type="text" placeholder="请输入手机号码/会员名/邮箱">
      <input v-else type="text" placeholder="请输入手机号码">
    </div>
    <div class="comfirm_btn">确认</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isRegister: true
    }
  },
  methods: {
    register() {
      this.isRegister = !this.isRegister
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
