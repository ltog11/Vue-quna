<template>
  <div class="icons">
    <swiper :options="swiperOptions">
      <swiper-slide  v-for="(page,index) of pages" :key="index">
        <div class="icons-item" v-for="item of page" :key="item.id">
          <img :src="item.imgUrl" class="icons-pic">
          <span class="icons-text">{{item.desc}}</span>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      swiperOptions: {
        autoplay: false
      }
    }
  },
  props: {
    iconList: Array
  },
  computed: {
    pages () {
      const pages = [];
      this.iconList.forEach((item,index) => {
        // index是从0开始,直到8,那么index / 8,然后再向下取整,值为8个0和1和1,所以page的值只有0和1
        const page = Math.floor(index / 8)

        // 判断pages[0],pages[1]是否有值,没有值就是初始化为空,所以就有了空数组
        if (!pages[page]) {
          pages[page] = [];
        }
        // 在pages[0]和pages[1]数组中添加内容
        pages[page].push(item);
      })
      return pages;
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~style/varibles.styl'
  @import '~style/mixins.styl'
  .icons
    width 100%
    padding 15px 0
    background-color #fff
    .icons-item
      position relative
      padding 10px 0
      width 25%
      float left
      display flex
      justify-content center
      align-items center
      flex-direction column
      .icons-pic
        width 50%
        margin-bottom 8px
      .icons-text
        position absolute
        bottom 0
        left 0
        right 0
        text-align center
        color $iconColor
        ellipsis()
</style>
