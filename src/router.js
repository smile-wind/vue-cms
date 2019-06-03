import VueRouter from 'vue-router'
// import Vue from 'vue'
// Vue.use(vueRouter)

//导热油tabbar组件
import HomeContanier from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import ShopcarContanier from './components/tabbar/ShopcarContainer.vue'
import SearchContanier from './components/tabbar/SearchContainer.vue'


var router = new VueRouter({
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', component: HomeContanier },
        { path: '/member', component: MemberContainer },
        { path: '/shopcar', component: ShopcarContanier },
        { path: '/search', component: SearchContanier }
    ],
    linkActiveClass: 'mui-active'//修改选择路由后高亮显示
})


//对外暴露router对象
export default router