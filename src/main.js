//导入vue
import Vue from 'vue'

//导图路由模块
import VueRouter from 'vue-router'

//注册路由
Vue.use(VueRouter)


//导入主体根布局
import app from './App.vue'

//按需导入mint-ui的组件
// import { Header, Swipe, SwipeItem, Button, Lazyload } from 'mint-ui';

import MintUI from 'mint-ui'
Vue.use(MintUI)
import 'mint-ui/lib/style.css'

//导入图片预览的包
import VuePreview from 'vue-preview'
Vue.use(VuePreview, {
    mainClass: 'pswp--minimal--dark',
    barsSize: { top: 0, bottom: 0 },
    captionEl: true,//预览后左下角的标题显示
    fullscreenEl: false,//预览后是否全屏
    shareEl: true,//是否分享
    bgOpacity: 1,//透明度
    tapToClose: true,//再次点击关闭
    tapToToggleControls: false//图片上显示左右箭头
})

//定义全局的时间插件格式化过滤器
Vue.filter('dateFormat', function (dateStr, patten = 'YYYY-MM-DD HH:mm:ss') {
    //使用moment插件 , cnpm i moment
    return moment(dateStr).format(patten);
})

//导入本地路由配置文件
import router from './router.js'

import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(Header.name, Header);
// Vue.component(Button.name, Button);
// Vue.use(Lazyload);



var vm = new Vue({
    el: '#app',
    render: c => c(app),
    router: router
})