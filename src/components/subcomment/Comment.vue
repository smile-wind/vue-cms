<template>
  <div>
    <h3 class="ed-info">发表评论</h3>
    <hr class="ed-info">
    <textarea
      class="ed-info"
      style="width:90%;height:120px;"
      placeholder="请输入吐槽内容(最大20个字)"
      maxlength="20"
    ></textarea>
    <mt-button class="ed-info" style="width:90%;" type="primary" size="large">发表评论</mt-button>

    <div class="cmt-list">
      <div class="cmt-item">
        <div
          class="cmt-title"
        >第1楼 &nbsp;&nbsp;&nbsp;用户:windy &nbsp;&nbsp;&nbsp;发表时间:2019/06/03 12:12:12</div>
        <div class="cmt-body">静夜思~李白</div>
      </div>
    </div>
    <div class="cmt-list">
      <div class="cmt-item">
        <div
          class="cmt-title"
        >第1楼 &nbsp;&nbsp;&nbsp;用户:windy &nbsp;&nbsp;&nbsp;发表时间:2019/06/03 12:12:12</div>
        <div class="cmt-body">静夜思~李白</div>
      </div>
    </div>
    <div class="cmt-list">
      <div class="cmt-item">
        <div
          class="cmt-title"
        >第1楼 &nbsp;&nbsp;&nbsp;用户:windy &nbsp;&nbsp;&nbsp;发表时间:2019/06/03 12:12:12</div>
        <div class="cmt-body">静夜思~李白</div>
      </div>
    </div>
    <div class="cmt-list">
      <div class="cmt-item">
        <div
          class="cmt-title"
        >第1楼 &nbsp;&nbsp;&nbsp;用户:windy &nbsp;&nbsp;&nbsp;发表时间:2019/06/03 12:12:12</div>
        <div class="cmt-body">静夜思~李白</div>
      </div>
    </div>
    <div class="cmt-list">
      <div class="cmt-item">
        <div
          class="cmt-title"
        >第1楼 &nbsp;&nbsp;&nbsp;用户:windy &nbsp;&nbsp;&nbsp;发表时间:2019/06/03 12:12:12</div>
        <div class="cmt-body">静夜思~李白</div>
      </div>
    </div>

    <mt-button
      class="ed-info"
      style="width:90%;"
      type="danger"
      plain
      size="large"
      @click="more"
    >加载更多</mt-button>
  </div>
</template>
<script>
import { Toast } from 'mint-ui'
export default {
    methods:{
        more (){
            Toast('没有更多评论啦...');
        }
    }
}
</script>
<style lang="scss" scoped>
.cmt-list {
  margin: 20px;
  font-size: 12px;
  .cmt-title {
    background: lightgray;
    padding: 5px;
    border-radius: 5px;
  }
  .cmt-body {
    //缩进
    text-indent: 2em;
    padding: 5px;
  }
}
</style>