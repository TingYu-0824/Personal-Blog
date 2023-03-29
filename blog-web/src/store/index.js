import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
//引入仓库
import card from './card';
import home from './home';
import code from './code';
import timeline from './timeline';
import message from './message';
export default new Vuex.Store({
    modules:{
        //注册仓库
        card,
        home,
        code,
        timeline,
        message,
    }
})