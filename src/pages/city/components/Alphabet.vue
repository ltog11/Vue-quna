<template>
  <div class="alphabet">
    <ul class="alphabet-list">
      <li v-for="(item,key) of cities" :key="key" :ref="key">
        <a
          href=""
          @click.prevent="handleClick"
          @touchstart="handleTouchStart"
          @touchmove="handleTouchMove"
          @touchend="handleTouchEnd"
        >{{key}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'CityAlphabet',
    data () {
      return {
        isTouchStart: false,  // 是否触摸开始
        timer: null
      }
    },
    props: {
      cities: Object
    },
    computed: {
      targets() {
       const targets = [];
       for (let i in this.cities) {
         targets.push(i);
       }
       return targets;  //  ['A','B','C','D',....]
      }
    },
    methods: {
      handleClick(e) {
        // 点击字母时把对应的字母的值传给父组件
        this.$emit('Target',e.currentTarget.innerText);
      },
      handleTouchStart() {
        this.isTouchStart = true;
      },
      handleTouchMove(e) {
        if (this.isTouchStart) {
          if (this.timer) {
            clearTimeout(this.timer);
          }
          // 函数节流
          this.timer = setTimeout(() => {
            const startY = this.$refs['A'][0].offsetTop;  // 获取A字母距离头部蓝色区域的距离
            const touchY = e.touches[0].clientY - 79;     // 获取移动时当前字母距离头部蓝色区域的距离
            const index = Math.floor((touchY - startY) / 20); // 获取字母下标
            if (index >= 0 && index < this.targets.length) {
              this.$emit('Target',this.targets[index]); // 移动时对应下标的字母传给父组件
            }
          },5);
        }
      },
      handleTouchEnd() {
        this.isTouchStart = false;
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import '~style/varibles.styl'
  @import '~style/mixins.styl'
  .alphabet
   .alphabet-list
     flex-centerRow()
     position absolute
     top 1.58rem
     right 0
     bottom 0
     width .4rem
     line-height .4rem
     color $bgColor
</style>
