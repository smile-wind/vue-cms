//导入vue
import Vue from 'vue'

//导图路由模块
import VueRouter from 'vue-router'

//注册路由
Vue.use(VueRouter)

//导入主体根布局
import app from './App.vue'

//按需导入mint-ui的组件
import { Header, Swipe, SwipeItem, Button } from 'mint-ui';


//定义全局的时间插件格式化过滤器
Vue.filter('dateFormat', function (dateStr, patten = 'YYYY-MM-DD HH:mm:ss') {
    //使用moment插件 , cnpm i moment
    return moment(dateStr).format(patten);
})

//导入本地路由配置文件
import router from './router.js'

import 'mint-ui/lib/style.css'
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Header.name, Header);
Vue.component(Button.name, Button);




var vm = new Vue({
    el: '#app',
    render: c => c(app),
    router: router
})