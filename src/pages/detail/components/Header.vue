<template>
  <div class="header" :class="{'header-trantistion': isHeaderTransition}">
    <i class="iconfont header-back" @click="goback">&#xe624;</i>
    {{sightName}}
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data() {
    return {
      isHeaderTransition: false
    }
  },
  props: {
    sightName: String
  },
  methods: {
    goback() {
      this.$router.back();
    },
    handleScroll() {
      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset;
      scrollTop > 70 ? this.isHeaderTransition = true : this.isHeaderTransition = false;
    }
  },
  // 页面显示时,绑定scroll事件
  // 当使用keep-alive时,会多一个activated生命周期函数
  activated() {
    window.addEventListener('scroll', this.handleScroll);
  },
  // 当页面被隐藏时,解绑scroll事件
  // 当使用keep-alive时,还会多一个deactivated生命周期函数
  deactivated() {
    window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>

<style lang="stylus" scoped>
  @import '~style/varibles.styl'
  .header
    position fixed
    top 0
    right 0
    left 0
    z-index 1
    height $headerHeight
    line-height $headerHeight
    background transparent
    text-align center
    color #fff
    transition background-color .5s
    .header-back
      position absolute
      left 0
      text-align left
      font-size .4rem

  .header.header-trantistion
    background-color $bgColor
</style>
