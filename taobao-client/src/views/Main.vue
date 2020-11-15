<template>
  <div id="main">
    <!-- 头部导航栏 -->
    <div class="header"> 
      <i class="iconfont icon-qiandao"></i>
      <van-search v-model="value" @search="onsearch" placeholder="请输入搜索关键词">
      </van-search>
      <i class="iconfont icon-huiyuanma"></i>
    </div>
    <swiper />
    <!-- 频道banner栏 -->
    <div class="banner"> 
        <channel v-for="(item, index) in channelList" :key="index" :channel="item" >
      </channel>
      
    </div>
  </div>
</template>

<script>
import channel from '@/components/Channel'
import swiper from '@/components/swiper'
import api from '@/api/index'
export default {
  components: {
    channel,
    swiper
  },
  data() {
    return {
      value: '',
      channelList: []
    }
  },
  methods: {
    onsearch() {
      console.log(1);
    },
    getChannel() {
      api.Channel().then(res => { // 从后端get Channel数据
        console.log(res);
        this.channelList = res.data
      })
    }
  },
  mounted() {
    this.getChannel()
  }
}
</script>

<style lang="stylus" scoped>
#main
  padding 14px
  .header
    display flex
    justify-content space-between
    align-items center
    .icon-huiyuanma
      color #FC482E
      font-size 26px
    .van-search
      padding 0 10px
      flex 1
    .icon-qiandao
      color #FC482E
      font-size 26px
  .banner
    padding 6px 0
    display flex
    flex-wrap wrap
    justify-content space-between
    align-items baseline
</style>