<template>
  <div>
    <detail-header :sightName="sightName"></detail-header>
    <detail-banner :bannerImg="bannerImg" :gallaryImgs="gallaryImgs" :sightName="sightName"></detail-banner>
    <div class="content">
      <detail-content :categoryList="categoryList"></detail-content>
    </div>
  </div>
</template>

<script>
  import DetailHeader from './components/Header'
  import DetailBanner from './components/banner'
  import DetailContent from './components/Content'
  export default {
    name: 'Detail',
    components: {
      DetailHeader,
      DetailBanner,
      DetailContent
    },
    data () {
      return {
        bannerImg: '',
        gallaryImgs: [],
        categoryList: [],
        sightName: ''
      }
    },
    activated() {
      this.getDetailInfo();
    },
    methods: {
      getDetailInfo() {
        this.$http.get('/api/detail.json',{
          params: {
            id: this.$route.params.id
          }
        }).then(res => {
          if (res.status !== 200) {
            return;
          }
          this.bannerImg = res.data.data.bannerImg;
          this.gallaryImgs = res.data.data.gallaryImgs;
          this.categoryList = res.data.data.categoryList;
          this.sightName = res.data.data.sightName;
        })
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .content
    height 30rem
</style>
