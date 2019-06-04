<template>
  <div>
    <h3 class="ed-info">评论列表</h3>
    <hr class="ed-info">
    <textarea
      class="ed-info"
      style="width:90%;height:120px;"
      placeholder="请输入吐槽内容(最大20个字)"
      maxlength="20"
      v-model="contents"
    ></textarea>
    <mt-button class="ed-info" style="width:90%;" type="primary" size="large" @click="subc">发表评论</mt-button>

    <div class="cmt-list" v-for="(item,index) in contentsList" :key="item.id">
      <div class="cmt-item">
        <div
          class="cmt-title"
        >第{{index+1}}楼 &nbsp;&nbsp;&nbsp;用户:{{item.name}} &nbsp;&nbsp;&nbsp;发表时间:{{item.times}}</div>
        <div class="cmt-body">{{item.ct}}</div>
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
    data (){
        return {
            //模拟评论列表
            contentsList:[
                {id:1,name:'windy',times:'2019-06-03 12:34:12',ct:'静夜思---李白'},
                {id:2,name:'windy',times:'2019-06-03 12:34:12',ct:'静夜思---李白'},
                {id:3,name:'windy',times:'2019-06-03 12:34:12',ct:'静夜思---李白'},
            ],
            contents:'',//评论框的数据绑定内容
        }
    },
    methods:{
        more (){
            Toast('没有更多评论啦...');
        },

        subc (){
            if(this.contents == '' || this.contents.length<2){
              Toast('请输入大于2个字的评论...'); return;
            }
            var newInfo = {
                id:Math.random()*10,
                name:'windy',
                times:"2019-23-2 12:78:53",
                ct:this.contents
            };
            this.contentsList.unshift(newInfo);
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