<template>
  <transition name="gallary" appear>
    <div class="gallary" @click="gallaryClose">
      <swiper :options="swiperOptions">
        <swiper-slide v-for="(item,index) in gallaryImgs" :key="index">
          <img :src="item">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'CommonGallary',
    data () {
      return {
        swiperOptions: {
          pagination: '.swiper-pagination',
          paginationType : 'fraction',  // 分页器样式   分式
          direction: 'horizontal',
          loop: true
        }
      }
    },
    props: {
      gallaryImgs: Array
    },
    methods: {
      gallaryClose() {
        this.$emit('closeGallary');
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .gallary >>> .swiper-container
    width 100%
    overflow inherit

  .gallary
    position absolute
    top 0
    right 0
    bottom 0
    left 0
    background-color black
    display flex
    justify-content center
    align-items center
    z-index 3
    img
      display block
      width 100%
    .swiper-pagination
      color #fff
      bottom -1rem

  .gallary-enter-active
    transition all .5s

  .gallary-leave-active
    @extend .gallary-enter-active

  .gallary-enter
    opacity 0

  .gallary-leave-to
    @extend .gallary-enter
</style>
