<template>
  <transition name="city" appear>
    <div class="city">
      <city-header></city-header>
      <city-search :cities="cities"></city-search>
      <city-list :hotCities="hotCities" :cities="cities" :target="target"></city-list>
      <city-alphabet :cities="cities" @Target="Target"></city-alphabet>
    </div>
  </transition>
</template>

<script>
  import CityHeader from './components/Header'
  import CitySearch from './components/Search'
  import CityList from './components/List'
  import CityAlphabet from './components/Alphabet'
  export default {
    name: 'City',
    components: {
      CityHeader,
      CitySearch,
      CityList,
      CityAlphabet
    },
    data () {
      return {
        hotCities: [],
        cities: {},
        target: ''
      }
    },
    created () {
      this.getCityInfo();
    },
    computed: {
      cityName() {
        return this.$store.state.cityName;
      }
    },
    methods: {
      getCityInfo () {
        this.$http.get('/api/city.json').then(res => {
          if (res.status !== 200) {
            return;
          }
          const data = res.data.data;
          this.hotCities = data.hotCities;
          this.cities = data.cities;
        })
      },
      Target (target) {
        this.target = target;
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .city-enter-active
    transition all .3s

  .city-leave-active
    @extend .city-enter-active

  .city-enter
    transform translate(100%, 0)

  .city-leave-to
    @extend .city-enter
</style>
