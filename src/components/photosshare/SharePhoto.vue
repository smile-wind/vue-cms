<template>
  <div>
    <!-- 顶部栏目滚动区域 -->
    <div id="slider" class="mui-slider">
      <div
        id="sliderSegmentedControl"
        class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
      >
        <div class="mui-scroll">
          <a
            :class="['mui-control-item', item.id==0?'mui-active':'']"
            v-for="item in catsList"
            :key="item.id"
            @click="cats(item.name)"
          >{{ item.name }}</a>
        </div>
      </div>
    </div>
    <!-- 列表展示区域  tag="li" 指定让vue渲染成li标签-->
    <ul class="photo-list">
      <router-link v-for="item in imgList" :key="item.id" :to="'/home/photoinfo/'+item.id" tag="li">
        <img v-lazy="item.imgUrl">
        <div class="img-info">
          <div class="info-title">{{item.title}}</div>
          <div class="info-body">{{item.ct}}</div>
        </div>
      </router-link>
    </ul>
  </div>
</template>
<script>
//栏目滚动需要的js
import mui from "../../lib/mui/js/mui.min.js"
import { Toast } from "mint-ui"
export default {
    data(){
        return {
            //模拟顶部栏目数据
            catsList:[
                {id:0,name:"全部"},
                {id:1,name:"热点"},
                {id:2,name:"美食"},
                {id:3,name:"写真"},
                {id:4,name:"家居"},
                {id:5,name:"明星"},
                {id:6,name:"摄影"}
            ],
            //模拟图片list
            imgList:[
                {id:1,imgUrl:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2320748111,1658304927&fm=26&gp=0.jpg',title:'名侦探柯南之新兰',ct:'日本漫画家青山刚昌创作作品《名侦探柯南》的主人公和《魔术快斗》中的客串角色。17岁 [1-2]  ，高中生侦探，就读于帝丹高中二年级B班，人称“平成年代的福尔摩斯”“日本警察的救世主”。家庭条件良好，外形帅气，性格沉稳，正义感强。'},
                {id:2,imgUrl:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4016367705,498391343&fm=26&gp=0.jpg',title:'名侦探柯南之新兰',ct:'日本动漫《名侦探柯南》的女主角。就读于帝丹高中二年级B班，校空手道部的主将。父亲是名侦探毛利小五郎，母亲是律政界女王妃英理，青梅竹马兼男友是高中生侦探工藤新一（化名江户川柯南）。被黑衣组织成员贝尔摩得称为“Angel（天使）” [1]  。虽曾数次怀疑江户川柯南的身份，但还不知道江户川柯南的真实身份就是工藤新一。'},
                {id:3,imgUrl:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2111778099,649159435&fm=26&gp=0.jpg',title:'名侦探柯南之新兰',ct:'日本漫画家青山刚昌创作作品《名侦探柯南》的主人公和《魔术快斗》中的客串角色。17岁 [1-2]  ，高中生侦探，就读于帝丹高中二年级B班，人称“平成年代的福尔摩斯”“日本警察的救世主”。家庭条件良好，外形帅气，性格沉稳，正义感强。'},
                {id:4,imgUrl:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3026923296,47469146&fm=26&gp=0.jpg',title:'名侦探柯南之新兰',ct:'日本动漫《名侦探柯南》的女主角。就读于帝丹高中二年级B班，校空手道部的主将。父亲是名侦探毛利小五郎，母亲是律政界女王妃英理，青梅竹马兼男友是高中生侦探工藤新一（化名江户川柯南）。被黑衣组织成员贝尔摩得称为“Angel（天使）” [1]  。虽曾数次怀疑江户川柯南的身份，但还不知道江户川柯南的真实身份就是工藤新一。'},
                {id:5,imgUrl:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3215811136,1252760969&fm=26&gp=0.jpg',title:'名侦探柯南之新兰',ct:'日本漫画家青山刚昌创作作品《名侦探柯南》的主人公和《魔术快斗》中的客串角色。17岁 [1-2]  ，高中生侦探，就读于帝丹高中二年级B班，人称“平成年代的福尔摩斯”“日本警察的救世主”。家庭条件良好，外形帅气，性格沉稳，正义感强。'},
                {id:6,imgUrl:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3874552565,142097902&fm=26&gp=0.jpg',title:'名侦探柯南之新兰',ct:'日本动漫《名侦探柯南》的女主角。就读于帝丹高中二年级B班，校空手道部的主将。父亲是名侦探毛利小五郎，母亲是律政界女王妃英理，青梅竹马兼男友是高中生侦探工藤新一（化名江户川柯南）。被黑衣组织成员贝尔摩得称为“Angel（天使）” [1]  。虽曾数次怀疑江户川柯南的身份，但还不知道江户川柯南的真实身份就是工藤新一。'},
                {id:7,imgUrl:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=267891207,2498461230&fm=26&gp=0.jpg',title:'名侦探柯南之新兰',ct:'日本漫画家青山刚昌创作作品《名侦探柯南》的主人公和《魔术快斗》中的客串角色。17岁 [1-2]  ，高中生侦探，就读于帝丹高中二年级B班，人称“平成年代的福尔摩斯”“日本警察的救世主”。家庭条件良好，外形帅气，性格沉稳，正义感强。'},
            ]
        };
    },
    mounted(){//当组建中的dom元素渲染完成后在执行这个函数,但如果这个初始化放在外面,滑动不骑作用
        mui('.mui-scroll-wrapper').scroll({
            deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        });
    },
    methods:{
        cats(catsName){
            Toast('当前所选栏目: '+catsName);
        },
    }
}
</script>
<style lang="scss" scoped>
/* 下面代码解决顶部栏目滑动的时候控制台报错 */
/* Unable to preventDefault inside passive event listener due to target being treated as passive */
* {
  touch-action: pan-y;
}

//图片样式
.photo-list {
  list-style: none;
  margin: 0;
  padding: 0;
  li {
    position: relative;
    margin: 4%;
    text-align: center;
    box-shadow: 0 0 9px rgb(104, 102, 102);
    // background: #ccc;
    img {
      width: 100%;
      vertical-align: middle;
    }
    img[lazy="loading"] {
      width: 40px;
      height: 300px;
      margin: auto;
    }
  }
}

//图片上的文字样式
.img-info {
  color: white;
  text-align: left;
  position: absolute;
  bottom: 0;
  max-height: 80px;
  overflow: hidden;
  word-break: keep-all;
  //   white-space: nowrap;
  text-overflow: ellipsis;
  margin: 5px;
  .info-title {
    font-size: 13px;
  }
  .info-body {
    font-size: 10px;
  }
}
</style>