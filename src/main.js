//导入vue
import Vue from 'vue'

//导图路由模块
import VueRouter from 'vue-router'

//注册路由
Vue.use(VueRouter)

//导入vuex
import Vuex from 'vuex'
Vue.use(Vuex)

//每次打开网站调用locastorage中的数据
var car = JSON.parse(localStorage.getItem('car') || '[]')
//若果要在组件中访问store中的数据,this.$store.state.xxx
var store = new Vuex.Store({
    //类似vue中的data
    state: {
        //购物车数据,{id:xxx,num:xxx,price:xxx,select:true}
        car: car,
    },
    //类似vue中的methods , this.$store.commit('方法名称',唯一参数)
    mutations: {
        //添加购物车使用
        addcar(state, goodsinfo) {
            var isHas = false;
            state.car.some(item => {
                if (item.id == goodsinfo.id) {
                    item.count += parseInt(goodsinfo.count)
                    isHas = true;
                    return true;
                }
            })
            if (!isHas) {
                state.car.unshift(goodsinfo);
            }

            localStorage.setItem('car', JSON.stringify(state.car))
        }
    },

    //只负责对外提供数据,不修改数据,如果要修改数据的话,只能使用mutations , this.$store.getters.xxx
    getters: {
        //获取car内商品总数
        getCarCount(state) {
            var c = 0;
            state.car.forEach(item => {
                c += item.count
            })
            return c;
        }
    }
})

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
    router: router,
    store: store
})