<template>
  <div class="header">
    <i class="iconfont header-back" @click="goBack">&#xe624;</i>
    城市选择
  </div>
</template>

<script>
  export default {
    name: 'CityHeader',
    methods: {
      goBack() {
        this.$router.back();
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import '~style/varibles.styl'
  .header
    position relative
    text-align center
    line-height $headerHeight
    background $bgColor
    color #fff
    .header-back
      position absolute
      left 0
      text-align left
      font-size .4rem
</style>
