<template>
  <div>
    <!-- 轮播图 -->
    <swiper :lunbolist="lunbolist" :isFull="true"></swiper>

    <!-- 中间区域6宫格 -->
    <div class="mui-content">
      <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
          <router-link to="/home/newlist">
            <!-- <span class="mui-icon mui-icon-home"></span> -->
            <img src="../../images/menu1.png" alt>
            <div class="mui-media-body">新闻资讯</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
          <router-link to="/home/sharephoto">
            <!-- <span class="mui-icon mui-icon-email"></span> -->
            <img src="../../images/menu2.png" alt>

            <div class="mui-media-body">图片分享</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
          <router-link to="/home/goodslist">
            <!-- <span class="mui-icon mui-icon-chatbubble"></span> -->
            <img src="../../images/menu3.png" alt>
            <div class="mui-media-body">商品购买</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
          <a href @click.prevent="weihu">
            <!-- <span class="mui-icon mui-icon-location"></span> -->
            <img src="../../images/menu4.png" alt>
            <div class="mui-media-body">留言反馈</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
          <a href @click.prevent="weihu">
            <!-- <span class="mui-icon mui-icon-search"></span> -->
            <img src="../../images/menu5.png" alt>
            <div class="mui-media-body">视频专区</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
          <a href @click.prevent="weihu">
            <!-- <span class="mui-icon mui-icon-phone"></span> -->
            <img src="../../images/menu6.png" alt>
            <div class="mui-media-body">联系我们</div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
//导入轮播图组件
import swiper from "../subcomment/Swiper.vue"
import { Toast } from 'mint-ui'
export default {
    data (){
        return {
               lunbolist:[
            {bid:1,imgUrl:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3582831096,680651571&fm=26&gp=0.jpg'},
            {bid:3,imgUrl:'https://ss1.baidu.com/-4o3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=a9e671b9a551f3dedcb2bf64a4eff0ec/4610b912c8fcc3cef70d70409845d688d53f20f7.jpg'},
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
        },

        weihu(){
            Toast('努力开发中...')
        }
    },
    components:{
        swiper
    }

}
</script>
<style lang="scss" scoped>
.mint-swipe {
  height: 200px;

  .mint-swipe-item {
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.mui-grid-view.mui-grid-9 {
  background-color: white;
  border: 0;
  img {
    width: 60px;
    height: 60px;
  }
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell {
  border: 0;
  .mui-media-body {
    font-size: 10px;
  }
}
</style>
