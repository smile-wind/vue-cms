<template>
  <div>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media">
        <router-link to="/home/newlist/10">
          <img
            class="mui-media-object mui-pull-left"
            src="http://img.cdn.qiniu.dcloud.net.cn/shuijiao.jpg"
          >
          <div class="mui-media-body">
            幸福
            <p class="mui-ellipsis">能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</p>
            <p class="cp">
              <span>发表时间: 2019-06-03 23:23:23</span>
              <span>点击次数: 1111次</span>
            </p>
          </div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media">
        <router-link to="/home/newlist/11">
          <img
            class="mui-media-object mui-pull-left"
            src="http://img.cdn.qiniu.dcloud.net.cn/muwu.jpg"
          >
          <div class="mui-media-body">
            木屋
            <p class="mui-ellipsis">想要这样一间小木屋，夏天挫冰吃瓜，冬天围炉取暖.</p>
          </div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media">
        <router-link to="/home/newlist/12">
          <img
            class="mui-media-object mui-pull-left"
            src="http://img.cdn.qiniu.dcloud.net.cn/cbd.jpg"
          >
          <div class="mui-media-body">
            CBD
            <p class="mui-ellipsis">烤炉模式的城，到黄昏，如同打翻的调色盘一般.</p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {

}
</script>
<style scoped>
.cp {
  margin-top: 5px;
  color: rgb(32, 164, 212);
  /* 下面两句代码可以使元素实现左右浮动 */
  display: flex;
  justify-content: space-between;
}
.mui-table-view {
  overflow-y: hidden;
}
</style>