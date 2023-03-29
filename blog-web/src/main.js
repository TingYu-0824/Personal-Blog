import Vue from 'vue'
import App from './App.vue'
//引入路由
import router from '@/router'
Vue.config.productionTip = false
import store from './store'
//引入element-ui组件
import { Row,Col,Card,Button,Pagination } from "element-ui";
// import 'element-theme-chalk';
Vue.component(Row.name,Row);
Vue.component(Col.name,Col);
Vue.component(Card.name,Card);
Vue.component(Button.name,Button);
Vue.component(Pagination.name,Pagination);

//引入mock数据
import '@/mock/mockSever';
new Vue({
  render: h => h(App),
  //注册路由
  router,
  store,
}).$mount('#app')
