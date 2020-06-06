<template>
  <div class="weekend">
    <div class="title">周末去哪</div>
    <div class="weekend-list" v-for="item of weekendList" :key="item.id">
      <img :src="item.imgUrl" class="weekend-list-pic">
      <p class="weekend-list-title">{{item.title}}</p>
      <p class="weekend-list-desc">{{item.desc}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HomeWeekend',
    props: {
      weekendList: Array
    }
  }
</script>

<style lang="stylus" scoped>
  @import '~style/mixins.styl'
  .weekend
    .title
      line-height: .8rem
      text-indent: .2rem
    .weekend-list
      background-color #fff
      .weekend-list-title
        line-height: .7rem
        font-size: .3rem
        text-indent: .2rem
      .weekend-list-pic
        width 100%
      .weekend-list-desc
        width 100%
        font-size .26rem
        padding-bottom .3rem
        color: #666
        text-indent: .2rem
        ellipsis()
</style>
