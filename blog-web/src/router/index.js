//引入插件
import Vue from "vue";
import VueRouter from "vue-router";
//使用插件
Vue.use(VueRouter);
//引入路由组件
import Home from "@/views/Home";
import Code from "@/views/Code";
import Timeline from "@/views/Timeline";
import Author from "@/views/Author";
import Message from  "@/views/Message";
// Home Code Life Author Message Timeline Login

//配置路由组件
export default new VueRouter({
    routes: [
        {
            //重定向，在项目跑起来的时候，访问/，定向到首页
            path:'*',
            redirect:'/home',
        },
        {
            //首页
            path: '/home',
            component: Home,
        },
        {
            //技术板块
            path: '/code',
            component: Code,
        },
        {
            //时间轴
            path: '/timeline',
            component: Timeline,
        },
        {
            //作者
            path: '/author',
            component: Author,
        },
        {
            //编辑
            path: '/message',
            component: Message,
        },
    ]
})