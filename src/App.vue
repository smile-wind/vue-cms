<template>
  <div class="box-container">
    <!-- <h1>这是vue测试用例</h1> -->
    <!-- 这里放header顶部 -->
    <mt-header fixed title="这是vue测试用例"></mt-header>
    <!-- <h2>稍等哈数据库的黑客技术</h2> -->
    <!-- 这里放content区域 -->
    <transition mode="out-in">
      <router-view></router-view>
    </transition>

    <!-- 这里放footer区域 -->
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item" to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item" to="/member">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link class="mui-tab-item" to="/shopcar">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge">0</span>
        </span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item" to="/search">
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
                
            }
        }
    }
</script>
<style scoped>
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
</style>
 