<template>
  <div class="recommend">
    <div class="title">热卖推荐</div>
    <div class="recommend-list" v-for="item of recommendList" :key="item.id">
      <img :src="item.imgUrl" class="recommend-list-pic">
      <div class="recommend-list-info">
        <p class="recommend-list-info-title">{{item.title}}</p>
        <p class="recommend-list-info-desc">{{item.desc}}</p>
        <router-link class="recommend-list-info-btn" :to="`/detail/${item.id}`">查看详情</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    recommendList: Array
  }
}
</script>

<style lang="stylus" scoped>
  @import '~style/mixins.styl'
  .recommend
    .title
      line-height: .8rem
      text-indent: .2rem
    .recommend-list.border
      border-bottom .01rem solid #eaeaea
    .recommend-list
      display flex
      height 1.9rem
      padding .2rem 0 0 .2rem
      border .01rem solid #eee
      background-color #fff
      position relative
      .recommend-list-pic
        width 1.6rem
        height 1.6rem
      .recommend-list-info
        flex 1
        min-width 0
        padding-top .075rem
        padding-left .12rem
        .recommend-list-info-title
          font-size: .32rem
        .recommend-list-info-desc
          line-height: .7rem
          color: #ccc
          ellipsis()
        .recommend-list-info-btn
          padding .1rem .2rem
          line-height .4rem
          font-size .25rem
          text-align center
          background: #ff9300
          border-radius: .06rem
          color: #fff
</style>
