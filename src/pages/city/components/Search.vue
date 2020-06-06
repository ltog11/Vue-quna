<template>
  <div class="search">
     <div class="search-header"><input type="text" placeholder="输入城市名或拼音" v-model="query"></div>
     <div class="search-result" ref="resultWrapper" v-show="query">
       <ul class="list">
         <li class="item" v-for="item of lists" :key="item.id" @click="handleClick(item.name)">{{item.name}}</li>
         <li class="item" v-show="!lists.length">没有找到匹配数据</li>
       </ul>
     </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  // import { mapMutations } from 'vuex'
  export default {
    name: 'CitySearch',
    data () {
      return {
        query: '',
        timer: null,
        lists: []
      }
    },
    mounted() {
      this.scroll = new BScroll(this.$refs.resultWrapper);
    },
    props: {
      cities: Object
    },
    watch: {
      // 检测query变化,渲染数据
      query() {
        if (this.timer) {
          clearTimeout(this.timer);
        }
        if (!this.query) {
          this.lists = [];
          return;
        }
        this.timer = setTimeout(() => {
          const result = [];
          for (let i in this.cities) {
            this.cities[i].forEach(value => {
              if (value.spell.includes(this.query) || value.name.includes(this.query)) {
                result.push(value);
              }
            })
          }
          this.lists = result;
        },100);
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
  .search
    z-index 1
    .search-header
      background $bgColor
      height .72rem
      padding 0 .1rem
      input
        box-sizing border-box
        width 100%
        height .62rem
        padding 0 .1rem
        line-height .62rem
        border-radius .06rem
        text-align center
    .search-result
      overflow hidden
      z-index 1
      position absolute
      top 1.58rem
      right 0
      bottom 0
      left 0
      background-color #eee
      .list
        background-color #fff
        line-height .44rem
        color #666
        font-size .26rem
        .item
          color #666
          padding .07rem .2rem
          border-bottom .01rem solid #eee
</style>
