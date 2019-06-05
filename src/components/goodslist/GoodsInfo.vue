<template>
  <div>
    <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
      <div class="ball" v-show="ballFlag" ref="ball"></div>
    </transition>

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
            <numbox @getNumber="getSelectNum"></numbox>
          </p>
          <p>
            <mt-button type="primary" size="small" @click="tocar">添加购物车</mt-button>
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
        <mt-button type="primary" size="large" plain @click="goDesc">图文介绍</mt-button>
        <mt-button type="danger" size="large" plain @click="goComment">商品评论</mt-button>
      </div>
    </div>
  </div>
</template>
<script>
//导入轮播图组件
import  swiper from '../subcomment/Swiper.vue'
//导入购买数量组件
import numbox from '../subcomment/GoodsInfoNumBox.vue'
 // 小球动画优化思路：
      // 1. 先分析导致 动画 不准确的 本质原因： 我们把 小球 最终 位移到的 位置，已经局限在了某一分辨率下的 滚动条未滚动的情况下；
      // 2. 只要分辨率和 测试的时候不一样，或者 滚动条有一定的滚动距离之后， 问题就出现了；
      // 3. 因此，我们经过分析，得到结论： 不能把 位置的 横纵坐标 直接写死了，而是应该 根据不同情况，动态计算这个坐标值；
      // 4. 经过分析，得出解题思路： 先得到 徽标的 横纵 坐标，再得到 小球的 横纵坐标，然后 让 y 值 求差， x 值也求 差，得到 的结果，就是横纵坐标要位移的距离
      // 5. 如何 获取 徽标和小球的 位置？？？   domObject.getBoundingClientRect()

     
export default {
    data (){
        return {
            //购物车小球默认隐藏
            ballFlag:false,
            //添加购物车时默认的数量
            selectNumber:1,
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
        },
        //使用编程式导航实现跳转
        goDesc(){
            this.$router.push({name:'goodsdesc',param:{id:Math.random()*10}})
        },
        goComment(){
            this.$router.push({name:'goodscomment',param:{id:Math.random()*10}})
        },
        //添加购物车小球显示和隐藏,以及效果
        tocar(){
            var goodsInfo = {
                id:Math.ceil(Math.random()*10),
                count:this.selectNumber,
                price:2699,
                select:true
            }
            //调用vuex中的mutation保存全局数据
            this.$store.commit('addcar',goodsInfo)
            this.ballFlag = !this.ballFlag;
        },
        beforeEnter(el){
           el.style.transform = "translate(0,0)"
        },
        
        enter(el,done){
             // 获取小球的 在页面中的位置
            const ballPosition = this.$refs.ball.getBoundingClientRect();
            // 获取 徽标 在页面中的位置
            const badgePosition = document
                .getElementById("badge")
                .getBoundingClientRect();

            const xDist = badgePosition.left - ballPosition.left;
            const yDist = badgePosition.top - ballPosition.top;
            el.offsetWidth;
            el.style.transform = `translate(${xDist}px, ${yDist}px)`
            el.style.transition = "all 1s cubic-bezier(.4,-0.3,1,.068)"
            done()
        },
        afterEnter(el){
            this.ballFlag = !this.ballFlag
        },
        //GoodsBoxNumber 子组件向父组件传值
        getSelectNum(count){
            this.selectNumber = count
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

//购物车小球
.ball {
  width: 15px;
  height: 15px;
  background: red;
  border-radius: 50%;
  position: absolute;
  z-index: 99;
  top: 410px;
  left: 142px;
  //   transform: translate(90px, 80px);
}
</style>