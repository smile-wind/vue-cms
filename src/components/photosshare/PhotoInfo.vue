<template>
  <div>
    <h4 class="header-info">{{id}}---名侦探柯南</h4>
    <p class="ed-info">
      <span>发表时间:2019-06-03 12:45:21</span>
      <span>查看次数:12次</span>
    </p>
    <hr class="ed-info">
    <div class="img-ds">
      <template>
        <vue-preview :slides="slide1" @close="handleClose"></vue-preview>
      </template>
    </div>

    <div>
      <p
        class="ed-info suo"
      >日本动漫《名侦探柯南》的主人公和《魔术快斗》中的客串角色。真实身份是高中生侦探工藤新一，人称“平成年代的福尔摩斯”、“日本警察的救世主”。他因为试图跟踪黑衣组织成员而被偷袭，并被灌下代号“APTX4869”的毒药，虽然幸免于死，但身体就此缩小成一年级小学生的模样。之后寻求阿笠博士的帮助，在被青梅竹马的女友毛利兰询问自己名字时，化名为江户川柯南。在阿笠博士的提议下，寄住于小兰的父亲毛利小五郎家中，不仅解决着各种案件，并且还在秘密调查黑衣组织。</p>
      <p
        class="ed-info suo"
      >变小后的工藤新一被毛利兰询问姓名，情急之下受到《福尔摩斯探案集》的作者“阿瑟·柯南·道尔”和日本侦探小说作家“江户川乱步”名字的启发，为自己取名为“江户川柯南”。</p>
      <p
        class="ed-info suo"
      >真实身份是高中生侦探工藤新一。17岁 [1] ，因服下毒药身体变小后约7岁 [2] 。生日是5月4日 [1] ，来源于1891年5月4日福尔摩斯和莫里亚蒂教授坠入莱辛巴赫瀑布的日期。作者青山刚昌称柯南的身高会有微妙变化 [6] ，也称柯南的身高在小学一年级生中算小个子 [7] ，而工藤新一的身高是174cm [6] 。体重是18.5 kg [4] [8] ，血型不详，但与小兰相同 [3] 。原来住在东京都米花町2丁目21番地，来源于福尔摩斯的住址贝克街221B（“贝克”和“米花”的日文发音相同，都为“Beika”）。现住在毛利侦探事务所，地址为东京都米花町5丁目39番地1号（动画原创设定） [9] 。在帝丹小学1年B班就读（工藤新一在7岁时为1年A班 [10] ）。手机型号是索爱W21S → 索爱Xperia arc S LT18i（漫画File.796、TV 673起）。</p>
    </div>
    <div>
      <!-- 3.使用子组件  -->
      <comment-box></comment-box>
    </div>
  </div>
</template>
<script>
//1. 使用子组件
import comment from '../subcomment/Comment.vue'
export default {
    data (){
        return {
            id: this.$route.params.id,
            slide1: [
          {
            src: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4226247708,4254744226&fm=26&gp=0.jpg',
            msrc: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4226247708,4254744226&fm=26&gp=0.jpg',
            alt: 'picture1',
            title: '名侦探柯南',
            w: 600,
            h: 400
          },
          {
            src: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1317017760,1750402344&fm=26&gp=0.jpg',
            msrc:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1317017760,1750402344&fm=26&gp=0.jpg',
            alt: 'picture2',
            title: '名侦探柯南',
            w: 600,
            h: 400
          },
          {
              src:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=763408288,1997052973&fm=26&gp=0.jpg',
              msrc:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=763408288,1997052973&fm=26&gp=0.jpg',
              alt:'this is img',
              title:'名侦探柯南',
              w:600,
              h:400
          },
          {
              src:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=632957331,3038984292&fm=26&gp=0.jpg',
              msrc:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=632957331,3038984292&fm=26&gp=0.jpg',
              alt:'this is img',
              title:'名侦探柯南',
              w:600,
              h:400
          },
          {
              src:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4144317769,2207962719&fm=26&gp=0.jpg',
              msrc:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4144317769,2207962719&fm=26&gp=0.jpg',
              alt:'this is img',
              title:'名侦探柯南',
              w:600,
              h:400
          }
        ]
        }
    },
    methods:{
        handleClose () {
            console.log('close event')
        }
    },
    //2. 注册子组件
    components: {
        "comment-box" : comment
    }
}
</script>
<style lang="scss" >
.header-info {
  text-align: center;
  margin-top: 10px;
}
.ed-info {
  margin: 20px;
  display: flex;
  justify-content: space-between;
}
// .img {
//   width: 90%;
//   height: 100%;
//   margin: 20px;
// }
.suo {
  text-indent: 2em;
}

//vue-preview 预览图片插件进行样式微调
figure {
  display: inline !important;
  margin-left: 20px !important;
  margin-right: 20px !important;
  padding: 0 !important;
}
.my-gallery {
  img {
    width: 22%;
    height: 30%;
    box-shadow: 0 0 8px #999;
  }
}
</style>