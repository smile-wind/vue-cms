<template>
  <div class="box-container">
    <!-- <h1>这是vue测试用例</h1> -->
    <!-- 这里放header顶部 -->
    <mt-header fixed title="这是vue测试用例">
      <span slot="left" @click="backs" v-show="flag">
        <mt-button icon="back">返回</mt-button>
      </span>
    </mt-header>
    <!-- <h2>稍等哈数据库的黑客技术</h2> -->
    <!-- 这里放content区域 -->
    <transition mode="out-in">
      <router-view></router-view>
    </transition>

    <!-- 这里放footer区域 -->
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item-llb" to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item-llb" to="/member">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link class="mui-tab-item-llb" to="/shopcar">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge" id="badge">{{ $store.getters.getCarCount }}</span>
        </span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item-llb" to="/search">
        <span class="mui-icon mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>
  </div>
</template>
<script>
    export default{
        data (){
            return {
                flag:false
            }
        },
        methods:{
            backs (){
                this.$router.go(-1)
            }
        },
        created(){
            this.flag = this.$route.path == '/home'?false:true;
        },
        watch:{
            //判断返回按钮
            "$route.path":function(newVal){
                if(newVal == '/home'){
                    this.flag = false;
                }else{
                    this.flag = true
                }
            }
        }
    }
</script>
<style scoped>
.mint-header {
  z-index: 99;
}
/* 下面代码解决顶部栏目滑动的时候控制台报错 */
/* Unable to preventDefault inside passive event listener due to target being treated as passive */
* {
  touch-action: pan-y;
}
.v-enter {
  opacity: 0;
  transform: translateX(100%);
}
.v-leave-to {
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}
.box-container {
  padding-top: 40px;
  padding-bottom: 50px;
  /* 解决使用动画切换tabbar栏目的时候下面会出现滚动条,让它的x轴超出部分隐藏 */
  overflow-x: hidden;
}

/* 解决tabbar无法切换的问题
    把mui自带的类名 mui-tab-item  改为mui-tab-item-llb
*/
.mui-bar-tab .mui-tab-item-llb.mui-active {
  color: #007aff;
}

.mui-bar-tab .mui-tab-item-llb {
  display: table-cell;
  overflow: hidden;
  width: 1%;
  height: 50px;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #929292;
}

.mui-bar-tab .mui-tab-item-llb .mui-icon {
  top: 3px;
  width: 24px;
  height: 24px;
  padding-top: 0;
  padding-bottom: 0;
}

.mui-bar-tab .mui-tab-item-llb .mui-icon ~ .mui-tab-label {
  font-size: 11px;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
 