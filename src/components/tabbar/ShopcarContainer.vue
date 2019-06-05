<template>
  <div>
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <mt-switch></mt-switch>
          <div class="goodslist">
            <img
              src="https://img14.360buyimg.com/n0/jfs/t1/55334/19/762/704721/5ce7e2e7Ec53cb3c0/8928246b675c2355.png"
              alt
            >
            <div class="info">
              <p>iphone Xr 1T 限时特价2元钱</p>
              <p>
                <span>&yen; 2199</span>
                <boxNum></boxNum>
                <a href>删除</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">这是一个最简单的卡片视图控件；卡片视图常用来显示完整独立的一段信息，比如一篇文章的预览图、作者信息、点赞数量等</div>
      </div>
    </div>
  </div>
</template>
<script>
import boxNum from '../subcomment/ShopCarBox.vue'
export default {
    components:{
        boxNum
    }
}
</script>
<style lang="scss" scoped>
.mui-card-content-inner {
  display: flex;
  align-items: center;
  .goodslist {
    img {
      width: 20%;
    }
    p {
      span {
        color: red;
      }
    }
  }
}
</style>