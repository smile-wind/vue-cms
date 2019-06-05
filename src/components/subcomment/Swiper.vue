<template>
  <div>
    <!-- 轮播图 -->
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in lunbolist" :key="item.bid">
        <img :src="item.imgUrl" alt="这是图片" :class="{'full':isFull}">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<script>
export default {
    // isFull 传递过来用来操作css类
    props:['lunbolist',"isFull"],
}
</script>
<style lang="scss" scoped>
.mint-swipe {
  height: 200px;
  text-align: center;
  .mint-swipe-item {
    img {
      //   width: 100%;
      height: 100%;
    }
  }
}

.full {
  width: 100%;
}
</style>