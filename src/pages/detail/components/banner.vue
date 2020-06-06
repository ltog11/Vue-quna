<template>
  <div>
    <div class="banner" @click="ShowGallary">
      <img :src="bannerImg">
      <div class="banner-info">
        <p class="banner-info-left">{{sightName}}</p>
        <p class="banner-info-right"><i class="iconfont">&#xe64b;</i>38</p>
      </div>
    </div>
    <common-gallary :gallaryImgs="gallaryImgs" v-if="showGallary" @closeGallary="closeGallary"></common-gallary>
  </div>
</template>

<script>
  import CommonGallary from '@/components/gallary/Gallary'
  export default {
    name: 'DetailBanner',
    data () {
      return {
        showGallary: false
      }
    },
    props: {
      bannerImg: String,
      gallaryImgs: Array,
      sightName: String
    },
    methods: {
      ShowGallary() {
        this.showGallary = true;
      },
      closeGallary() {
        this.showGallary = false;
      }
    },
    components: {
      CommonGallary
    }
  }
</script>

<style lang="stylus" scoped>
  .banner
    position relative
    img
      display block
      width 100%
    .banner-info
      position absolute
      right 0
      bottom 0
      left 0
      color #fff
      padding 0 .3rem .2rem
      height .4rem
      line-height .4rem
      display flex
      justify-content space-between
      background-image: linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,.8));
      .banner-info-left
        font-size .32rem
      .banner-info-right
        text-align center
        border-radius .4rem
        background-color rgba(0, 0, 0, .8)
        padding 0 .25rem
        font-size .24rem
        i
          padding-right .1rem
          font-size .24rem
</style>
