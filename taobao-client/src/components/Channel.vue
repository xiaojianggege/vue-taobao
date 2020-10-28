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
  .pic
    img
      width 40px 
  .title
    margin-top 4px
    font-size 12px
</style>