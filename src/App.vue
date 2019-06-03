<template>
  <div class="box-container">
    <!-- <h1>这是vue测试用例</h1> -->
    <!-- 这里放header顶部 -->
    <mt-header fixed title="这是vue测试用例"></mt-header>
    <h2>稍等哈数据库的黑客技术1</h2>
    <!-- 这里放content区域 -->

    <!-- 这里放footer区域 -->
    <mt-tabbar v-model="selected">
      <mt-tab-item id="外卖">
        <img slot="icon" src>
        外卖
      </mt-tab-item>
      <mt-tab-item id="订单">
        <img slot="icon" src>
        订单
      </mt-tab-item>
      <mt-tab-item id="发现">
        <img slot="icon" src>
        发现
      </mt-tab-item>
      <mt-tab-item id="我的">
        <img slot="icon" src>
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
    export default{
        data (){
            return {
                selected:'',
            }
        }
    }
</script>
<style scoped>
.box-container {
  padding-top: 40px;
}
</style>
 