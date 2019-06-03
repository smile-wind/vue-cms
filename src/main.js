//导入vue
import Vue from 'vue'

//导图路由模块
import VueRouter from 'vue-router'

//注册路由
Vue.use(VueRouter)

//导入主体根布局
import app from './App.vue'

//按需导入mint-ui的组件
import { Header, Swipe, SwipeItem } from 'mint-ui';


//导入本地路由配置文件
import router from './router.js'

import 'mint-ui/lib/style.css'
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Header.name, Header);




var vm = new Vue({
    el: '#app',
    render: c => c(app),
    router: router
})