<template>
  <div class="home">
    <home-header></home-header>
    <home-swiper :swiperList="swiperList"></home-swiper>
    <home-icons :iconList="iconList"></home-icons>
    <home-recommend :recommendList="recommendList"></home-recommend>
    <home-weekend :weekendList="weekendList"></home-weekend>
  </div>
</template>

<script>
  import HomeHeader from './components/Header'
  import HomeSwiper from './components/Swiper'
  import HomeIcons from './components/Icons'
  import HomeRecommend from './components/Recommend'
  import HomeWeekend from './components/Weekend'
export default {
  name: 'home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  data () {
    return {
      lastCity:'',
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: [],
    }
  },
  computed: {
    cityName() {
      return this.$store.state.cityName;
    }
  },
  created() {
    this.getHomeInfo();
    this.lastCity = this.cityName;
  },
  methods: {
    getHomeInfo() {
      this.$http.get('/api/index.json',{
        params: {
          city: this.cityName
        }
      }).then(res => {
        if (res.status !== 200) {
          return;
        }
        const data = res.data.data;
        this.swiperList = data.swiperList;
        this.iconList =  data.iconList;
        this.recommendList = data.recommendList;
        this.weekendList = data.weekendList;
      })
    }
  },
  // 当使用keep-alive时,会多一个activated生命周期函数
  // 当页面重新被显示时,activated会被重新执行
  activated() {
    if (this.lastCity !== this.cityName) {
      this.getHomeInfo();
      this.lastCity = this.cityName;
    }
  }
}
</script>

<style lang="stylus" scoped>
  .home
    background-color #f5f5f5
</style>
