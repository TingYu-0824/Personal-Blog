<template>
    <div>
        <div class="message">
            <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F3d597a97-755b-4a8d-868a-20848151b399%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1682665310&t=ba4d165219d70322b8c68ad3231f3f68"
                alt="">
            <!-- <div class="message-banner">
                <h1>留言版</h1>
                <input class="message-banner-input" v-model="msg" /><span class="message-banner-commit" @click="addToList">发送</span>
            </div> -->
        </div>

    </div>

</template>
<script>
import { mapState } from "vuex";
export default {
    name: "",
    data() {
        return {
        };
    },
    mounted() {
        this.$store.dispatch("getMessage");
    },
    computed: {
        ...mapState({
            barrageList: (state) => state.message.messageList,
        }),
    },
    methods: {
    },
};
</script>

<style scoped>
.message img {
    height: 100vh;
    width: 100vw;
}
</style>
