<template>
  <div class="img">
    <swiper ref="mySwiper" :options="swiperOption">
      <swiper-slide v-for="(item, index) in imgesList" :key="index">
        <img :src="item" alt="" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgesList: [
        "https://i.loli.net/2020/11/02/WFiMTPYflD6baoX.jpg",
        "https://i.loli.net/2020/11/02/AnPpNQ4LjU6TkiK.jpg",
        "https://i.loli.net/2020/11/02/Z64zMYdOqRV5hja.jpg",
        "https://i.loli.net/2020/11/02/lphJaSVvUzm1Xki.jpg",
        "https://i.loli.net/2020/11/02/GnIKfPWivtUuTkd.jpg",
      ],
        swiperOption: {
        autoplay: true,     ///////////////////////////////////////   把这里的3000改为true就可以了、
        grabCursor: true,
        setWrapperSize: true,
        autoHeight: true,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        mousewheelControl: true,
        autoplayDisableOnInteraction: false,
        observeParents: true,
        loop: true,
        observer: true
      } 
    }
  },
}
</script>

<style  scoped>
.img {
  padding: 6px 6px 0 6px;
}

.swiper-slide img {
  width: 100%;
}
</style>