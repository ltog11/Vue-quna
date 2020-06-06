<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="areaActive">
        <p class="title">您的位置</p>
        <div class="button-list">
          <div class="button-item">
            <a class="button-item-btn">
            {{cityName}}
              <!--      {{this.cityName}}-->
          </a>
          </div>
        </div>
      </div>
      <div class="areaHot">
        <p class="title">热门城市</p>
        <div class="button-list">
          <div class="button-item" v-for="item of hotCities" :key="item.id">
            <a class="button-item-btn" @click.prevent="handleClick(item.name)">{{item.name}}</a>
          </div>
        </div>
      </div>
      <div class="areaSpell">
        <div class="spell-list" v-for="(item,key) of cities" :key="key" :ref="key">
          <p class="title">{{key}}</p>
          <div class="desc" v-for="desc of item" :key="item.id" @click.prevent="handleClick(desc.name)">{{desc.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  // import { mapState,mapMutations } from 'vuex'
  export default {
    name: 'CityList',
    props: {
      hotCities: Array,
      cities: Object,
      target: String
    },
    mounted() {
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true
      });
    },
    computed: {
      cityName() {
        return this.$store.state.cityName;
        // 高级用法 mapState
        // ...mapState(['cityName'])
      }
    },
    watch: {
      target() {
        if (this.target) {
          const element = this.$refs[this.target][0];
          // 此方法由better-scroll插件提供,可以让滚动条自动滚动到相应的元素上,element必须为一个class名或者DOM元素
          this.scroll.scrollToElement(element);
        }
      }
    },
    methods: {
      handleClick(name) {
        // this.setCityName(name);
        this.$store.commit('setCityName',name);
        this.$router.push('/');
      },
      // 高级用法...mapMutations(['setCityName'])
      // ...mapMutations(['setCityName'])
    }
  }
</script>

<style lang="stylus" scoped>
  @import '~style/varibles.styl'
  titleStyle()
    background-color #eee
    line-height .44rem
    padding .1rem .2rem
    color #666
    font-size .26rem

  buttonItemStyle()
    text-align center
    display inline-block
    padding .1rem 0
    margin 0 0 .1rem .12rem
    width 30%
    font-size .24rem
    border-radius .06rem

  .list
    overflow hidden
    position absolute
    top 1.57rem
    right 0
    bottom 0
    left 0
    .areaActive
      .title
        titleStyle()
      .button-list
        padding .15rem .6rem .1rem .15rem
        .button-item
          buttonItemStyle()
          border .02rem solid $bgColor
    .areaHot
      .title
        titleStyle()
      .button-list
        padding .15rem .6rem .1rem .15rem
        .button-item
          buttonItemStyle()
          border .02rem solid #ccc
          .button-item-btn
            color black
    .areaSpell
      .spell-list
        .title
          titleStyle()
        .desc
          padding 0 .2rem
          line-height .6rem
          font-size .24rem
          border-bottom .01rem solid #eee
</style>
