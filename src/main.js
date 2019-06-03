//导入vue
import Vue from 'vue'

//导入主体根布局
import app from './App.vue'

//按需导入mint-ui的组件
import { Header } from 'mint-ui';
import { Tabbar, TabItem } from 'mint-ui';


import 'mint-ui/lib/style.css'
Vue.component(Header.name, Header);
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);

var vm = new Vue({
    el: '#app',
    render: c => c(app)
})