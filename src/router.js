import VueRouter from 'vue-router'
// import Vue from 'vue'
// Vue.use(vueRouter)

//导入abbar组件
import HomeContanier from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import ShopcarContanier from './components/tabbar/ShopcarContainer.vue'
import SearchContanier from './components/tabbar/SearchContainer.vue'

//导入新闻列表组件
import NewList from './components/newlist/NewList.vue'
import NewsInfo from './components/newlist/NewsInfo.vue'

var router = new VueRouter({
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', component: HomeContanier },
        { path: '/member', component: MemberContainer },
        { path: '/shopcar', component: ShopcarContanier },
        { path: '/search', component: SearchContanier },
        { path: '/home/newlist', component: NewList },
        { path: '/home/newlist/:id', component: NewsInfo },
    ],
    linkActiveClass: 'mui-active'//修改选择路由后高亮显示
})


//对外暴露router对象
export default router