<template>
    <div class="code">
        <div class="l-banan">
            <!-- 图片中心文字 -->
            <div class="img-content">
                <h1 class="m-title">code</h1>
                <p class="m-description">扫石共看山色坐，枕书同听雨声眠。</p>
            </div>
            <!-- 图片 -->
            <div class="l-image">
                <img class="image" src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F3d597a97-755b-4a8d-868a-20848151b399%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1682665310&t=ba4d165219d70322b8c68ad3231f3f68" alt="">
            </div>
        </div>
        <Card :blogCard="codeCard"></Card>
        <el-pagination class="pagination" small layout="prev,pager,next" :page-size="pageSize" :total="total" :current-page="currentPage"></el-pagination>
    </div>
</template>

<script>
import Card from "@/components/Card";
import { mapState } from "vuex";
export default {
    name: "",
    data(){
        return {
            // codeCard:[],
            //分页器 属性
            currentPage:1,//当前页数
            pageSize:9,//每页显示条目个数
            total:12,//总条目数
        };
    },
    components: {
        Card,
    },
    mounted() {
        //派发action
        this.$store.dispatch("getCodeCard");
    },
    computed:{
        //接收数据
        ...mapState({
            codeCard: (state)=> state.code.codeCard,
        })
    },
};
</script>

<style lang="less" scoped>
@import "../../assets/css/common.less";
</style>