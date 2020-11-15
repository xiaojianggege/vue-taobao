<template>
  <div class="channel" >
    <div class="pic" >
      <img :src="channel.pic" alt="">
    </div>
    <span class="title">{{channel.title}}</span>
  </div>
</template>
<script>
export default {
  props: {
    channel: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      
    }
  },
  created() {
    console.log(this.channel);
  }
}
</script>

<style lang="stylus" scoped>
.channel
  display flex
  flex-direction column
  align-items center
  justify-content center
  width 20%
  margin-bottom 6px
  .pic
    width 20%
    display flex
    justify-content center
    img
      width 32px 
  .title
    margin-top 8px
    font-size 12px
</style>