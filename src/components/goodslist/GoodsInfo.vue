<template>
  <div>
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <!-- 轮播图 -->
          <swiper :lunbolist="lunbolist" :isFull="false"></swiper>
        </div>
      </div>
    </div>
    <div class="mui-card">
      <div class="mui-card-header">Apple iPhone 6s Plus (A1699) 128G 深空灰 移动联通电信4G手机</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p class="price">
            <span class="now">市场价: &yen;8499</span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span class="old">销售价: &yen;6399</span>
          </p>
          <p class="number">
            购买数量:
            <numbox></numbox>
          </p>
          <p>
            <mt-button type="primary" size="small">添加购物车</mt-button>
            <mt-button type="danger" size="small">立即购买</mt-button>
          </p>
        </div>
      </div>
    </div>
    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>商品货号: SN834782374892</p>
          <p>商品库存: 99999</p>
          <p>上架时间: 2019-06-05 12:56:65</p>
        </div>
      </div>
      <div class="mui-card-footer">
        <mt-button type="primary" size="large" plain>图文介绍</mt-button>
        <mt-button type="danger" size="large" plain>商品评论</mt-button>
      </div>
    </div>
  </div>
</template>
<script>
//导入轮播图组件
import  swiper from '../subcomment/Swiper.vue'
//导入购买数量组件
import numbox from '../subcomment/GoodsInfoNumBox.vue'

export default {
    data (){
        return {
               lunbolist:[
            {bid:1,imgUrl:'https://img12.360buyimg.com/n1/s450x450_jfs/t30391/84/1094638348/666097/287b9f15/5cd66733N5a152223.png'},
            {bid:3,imgUrl:'https://img14.360buyimg.com/n0/jfs/t30391/84/1094638348/666097/287b9f15/5cd66733N5a152223.png'},
            {bid:5,imgUrl:'https://img14.360buyimg.com/n0/jfs/t1/5091/26/3422/246808/5b996f2eEf012435f/caef5b3f19897a64.jpg'},
            {bid:7,imgUrl:'https://img14.360buyimg.com/n0/jfs/t1/55334/19/762/704721/5ce7e2e7Ec53cb3c0/8928246b675c2355.png'},
            {bid:9,imgUrl:'https://img14.360buyimg.com/n0/jfs/t10783/84/2951752231/122940/72af450/5cdbf3a6N4e6aab4b.jpg'},
        ]//保存轮播图数据
        }
    },
    created(){
        this.getlunbo();
    },
    methods:{
        //模拟
        getlunbo(){
        //    this.$http.get("http://xxxx.xxx.com/api/getlubo").then(res=>{
        //        console.log(res)
        //    })
        }
    },
    components:{
        swiper,numbox
    }
}
</script>
<style lang="scss" scoped>
.now {
  text-decoration: line-through;
}
.old {
  color: red;
  font-size: 16px;
  font-weight: bold;
}
.number div {
  display: inline;
}
.mui-card-footer {
  display: block;
  button {
    margin: 15px 0;
  }
}
</style>