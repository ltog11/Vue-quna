<template>
  <div class="header">
    <div class="header-left"><i class="iconfont back-icon">&#xe624;</i></div>
    <div class="header-input"><i class="iconfont">&#xe632;</i></div>
    <router-link to="/city" class="header-right">
      {{cityName}}
<!--      {{this.cityName}}-->
      <i class="iconfont arrow-icon">&#xe64a;</i>
    </router-link>
  </div>
</template>

<script>
  // import { mapState } from 'vuex'
export default {
  name: 'HomeHeader',
  data () {
    return {
      city: ''
    }
  },
  computed: {
    cityName() {
      return this.$store.state.cityName;
    },
    // 高级用法 mapState
    // ...mapState(['cityName'])
  }
}
</script>

<style lang="stylus" scoped>
  //  1rem = html font-size = 50px
  //  86 /100
  @import '~style/mixins.styl'
  @import '~style/varibles.styl'
  .header
    display flex
    justify-content space-between
    line-height $headerHeight
    background $bgColor
    color #fff
    .header-left
      width .64rem
      .back-icon
        display block
        text-align center
        font-size .4rem
    .header-input
      flex 1
      height .64rem
      line-height .64rem
      color #ccc
      margin-top .12rem
      margin-left .2rem
      padding-left .2rem
      background #fff
      border-radius .1rem
    .header-right
      text-align center
      color #fff
      min-width 1.04rem
      padding 0 .1rem
      ellipsis()
      .arrow-icon
        font-size .24rem
</style>
