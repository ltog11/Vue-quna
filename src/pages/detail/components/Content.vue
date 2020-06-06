<template>
  <div class="content">
    <div class="content-list" v-for="(item,index) of categoryList" :key="index">
      <div class="content-list-title">
        <i class="content-list-title-icon"></i>
        {{item.title}}
      </div>
      <!--递归组件-->
      <div v-if="item.children" class="content-list-children">
        <detail-content :categoryList="item.children"></detail-content>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DetailContent',
    props: {
      categoryList: Array
    },
  }
</script>

<style lang="stylus" scoped>
  .content-list-title
    line-height: .8rem
    font-size: .32rem
    padding: 0 .2rem
    border-bottom .01rem solid #eee
    .content-list-title-icon
      position: relative
      left: .06rem
      top: .09rem
      display: inline-block
      width: .36rem
      height: .36rem
      background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat
      margin-right: .1rem
      background-size: .4rem 3rem
  .content-list-children
    padding: 0 .3rem
</style>
