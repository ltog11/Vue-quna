<template>
  <div class="box">
    <div class="btn">
      <span @click="Submit(1)">按钮一</span>
      <span @click="Submit(2)">按钮二</span>
      <span @click="Submit(3)">按钮三</span>
      <span @click="Submit(4)">按钮四</span>
      <span @click="Submit(5)">按钮五</span>
    </div>
    <div class="page">
      <div id="page1" style="background:red;"></div>
      <div id="page2" style="background:blue;"></div>
      <div id="page3" style="background:skyblue;"></div>
      <div id="page4" style="background:pink;"></div>
      <div id="page5" style="background:green;"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'index',
    methods: {
      Submit (key) {
        debugger;
        // 获取点击的按钮对应页面的id
        const PageId = document.querySelector('#page' + key);
        console.log(PageId);
        // 打印出对应页面与窗口的距离
        console.log(PageId.offsetTop)
        // 使用平滑属性，滑动到上方获取的距离
        // 下方我只设置了top，当然 你也可以加上 left 让他横向滑动
        // widow 根据浏览器滚动条，如果你是要在某个盒子里面产生滑动，记得修改
        window.scrollTo({
          'top': PageId.offsetTop,
          'behavior': 'smooth'
        })
      }
    }
  }
</script>

<style scoped>
  .box{
    width: 100%;
  }
  .page{
    width: 100%
  }
  .page div{
    width: 100%;
    height: 1000px;
  }
</style>
