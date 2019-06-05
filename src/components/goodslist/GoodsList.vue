<template>
  <!-- 在网页中有两种跳转方式
    1. a标签
  2. js代码,如:location.href , 这种叫做编程时导航-->
  <div class="goods-list">
    <div class="goods-item" @click="goDetail(Math.ceil(Math.random()*10))">
      <img
        src="https://img10.360buyimg.com/n7/jfs/t1/48366/33/1180/198155/5cee2e36Ec416b689/408d40be944ec8f2.jpg"
        alt
      >
      <h3 class="title">苹果Iphone Xr Max 128g全网通苹果Iphone Xr Max 128g全网通苹果Iphone Xr Max 128g全网通</h3>
      <div class="info">
        <p class="price">
          <span class="now">&yen; 6499</span>
          <span class="old">&yen; 8499</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩余20件</span>
        </p>
      </div>
    </div>
    <div class="goods-item" @click="goDetail(Math.ceil(Math.random()*10))">
      <img
        src="https://img13.360buyimg.com/n7/jfs/t10675/253/1344769770/66891/92d54ca4/59df2e7fN86c99a27.jpg"
        alt
      >
      <h3 class="title">苹果Iphone Xr Max 128g全网通</h3>
      <div class="info">
        <p class="price">
          <span class="now">&yen; 6499</span>
          <span class="old">&yen; 8499</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩余20件</span>
        </p>
      </div>
    </div>
    <div class="goods-item" @click="goDetail(Math.ceil(Math.random()*10))">
      <img
        src="https://img13.360buyimg.com/n7/jfs/t9748/198/2278597531/287981/7db932a3/59f32d6dN75ff3f6f.jpg"
        alt
      >
      <h3 class="title">苹果Iphone Xr Max 128g全网通</h3>
      <div class="info">
        <p class="price">
          <span class="now">&yen; 6499</span>
          <span class="old">&yen; 8499</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩余20件</span>
        </p>
      </div>
    </div>
    <div class="goods-item" @click="goDetail(Math.ceil(Math.random()*10))">
      <img
        src="https://img10.360buyimg.com/n7/jfs/t1/48366/33/1180/198155/5cee2e36Ec416b689/408d40be944ec8f2.jpg"
        alt
      >
      <h3 class="title">苹果Iphone Xr Max 128g全网通苹果Iphone Xr Max 128g全网通苹果Iphone Xr Max 128g全网通</h3>
      <div class="info">
        <p class="price">
          <span class="now">&yen; 6499</span>
          <span class="old">&yen; 8499</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩余20件</span>
        </p>
      </div>
    </div>
    <div class="goods-item" @click="goDetail(Math.ceil(Math.random()*10))">
      <img
        src="https://img13.360buyimg.com/n7/jfs/t10675/253/1344769770/66891/92d54ca4/59df2e7fN86c99a27.jpg"
        alt
      >
      <h3 class="title">苹果Iphone Xr Max 128g全网通</h3>
      <div class="info">
        <p class="price">
          <span class="now">&yen; 6499</span>
          <span class="old">&yen; 8499</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩余20件</span>
        </p>
      </div>
    </div>
    <div class="goods-item" @click="goDetail(Math.ceil(Math.random()*10))">
      <img
        src="https://img13.360buyimg.com/n7/jfs/t9748/198/2278597531/287981/7db932a3/59f32d6dN75ff3f6f.jpg"
        alt
      >
      <h3 class="title">苹果Iphone Xr Max 128g全网通</h3>
      <div class="info">
        <p class="price">
          <span class="now">&yen; 6499</span>
          <span class="old">&yen; 8499</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩余20件</span>
        </p>
      </div>
    </div>
    <div class="goods-item" @click="goDetail(Math.ceil(Math.random()*10))">
      <img
        src="https://img10.360buyimg.com/n7/jfs/t1/48366/33/1180/198155/5cee2e36Ec416b689/408d40be944ec8f2.jpg"
        alt
      >
      <h3 class="title">苹果Iphone Xr Max 128g全网通苹果Iphone Xr Max 128g全网通苹果Iphone Xr Max 128g全网通</h3>
      <div class="info">
        <p class="price">
          <span class="now">&yen; 6499</span>
          <span class="old">&yen; 8499</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩余20件</span>
        </p>
      </div>
    </div>
    <div class="goods-item" @click="goDetail(Math.ceil(Math.random()*10))">
      <img
        src="https://img13.360buyimg.com/n7/jfs/t10675/253/1344769770/66891/92d54ca4/59df2e7fN86c99a27.jpg"
        alt
      >
      <h3 class="title">苹果Iphone Xr Max 128g全网通</h3>
      <div class="info">
        <p class="price">
          <span class="now">&yen; 6499</span>
          <span class="old">&yen; 8499</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩余20件</span>
        </p>
      </div>
    </div>
    <div class="goods-item" @click="goDetail(Math.ceil(Math.random()*10))">
      <img
        src="https://img13.360buyimg.com/n7/jfs/t9748/198/2278597531/287981/7db932a3/59f32d6dN75ff3f6f.jpg"
        alt
      >
      <h3 class="title">苹果Iphone Xr Max 128g全网通</h3>
      <div class="info">
        <p class="price">
          <span class="now">&yen; 6499</span>
          <span class="old">&yen; 8499</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩余20件</span>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    data (){
        return {}
    },
    methods:{
        //使用编程时导航代替 router-link to的方式跳转页面
        goDetail(id){
            //1. 最简单方式
            // this.$router.push('/home/goodslist/'+id)
            //2. 对象
            // this.$router.push({ path: '/home/goodslist/'+id })
            //3. 命名的路由
            this.$router.push({ name: 'GoodsInfo', params: { id: id }})
            //4. 带查询参数，变成 /register?plan=private
            // this.$router.push({ path: '/home/goodslist/'+id, query: { id: id  }})

        }
    }
}
</script>
<style lang="scss" scoped>
.goods-list {
  display: flex;
  flex-wrap: wrap;
  padding: 7px;
  justify-content: space-between;

  .goods-item {
    width: 49%;
    border: 1px solid #ccc;
    box-shadow: 0 0 8px #ccc;
    margin-bottom: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 176px;
  }
  img {
    width: 100%;
  }

  .info {
    background: #ccc;
    p {
      margin: 0;
      padding: 5px;
    }
    .price {
      .now {
        color: red;
        font-weight: bold;
        font-size: 16px;
      }
      .old {
        text-decoration: line-through;
        font-size: 12px;
        margin-left: 10px;
      }
    }
    .sell {
      display: flex;
      justify-content: space-between;
      font-size: 12px;
    }
  }

  .title {
    padding: 2px;
    font-size: 14px;
  }
}
</style>