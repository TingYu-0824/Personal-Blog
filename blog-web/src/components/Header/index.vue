<template>
    <div>
        <!-- 头部 -->
        <div class="header">
            <div class="left">
                <img class="logo" src="../../assets/ting.png" @click="changeStyle('home')" alt="">
                <a class="nav home" @click="changeStyle('home')">Home</a>
                <a class="nav code" @click="changeStyle('code')">Code</a>
                <a class="nav timeline" @click="changeStyle('timeline')">Timeline</a>
                <a class="nav author" @click="changeStyle('author')">Author</a>
                <a class="nav iconfont icon-gengduo" @click="show=!show" style="font-size:40px;" title="More"></a>
            </div>
            <div class="right">
                <!-- <a class="message iconfont icon-qianbi" style="font-size:35px;" title="Message"></a> -->
                <a class="message iconfont icon-duihua2" style="font-size:45px;" title="Message" @click="changeStyle('message')"></a>
                <a class="login iconfont icon-dongyu" style="font-size:35px;" title="Login"></a>
                <a class="github iconfont icon-github" href="https://github.com/TingYu-0824/Personal-Blog" style="font-size:35px;" title="Follow me on GitHub" aria-label="Follow me on GitHub"></a>
            </div>
        </div>
        <!-- 更多 模块 -->
        <transition name="showcard">
            <div class="show-card" v-show="show">
                <h3>Tags</h3>
                <div class="tags-div">
                    <div class="tags">Vue</div>
                    <div class="tags">Java</div>
                    <div class="tags">Mysql</div>
                </div>
                <h3>Recent articles</h3>
                <div class="cards">
                    <div class="card">
                        <div class="card-image"><img src="../../assets/ting.png" alt=""></div>
                        <div class="card-massages">图标</div>
                    </div>
                    <div class="card">
                        <div class="card-image"><img src="../../assets/ting.png" alt=""></div>
                        <div class="card-massages">图标</div>
                    </div>
                    <div class="card">
                        <div class="card-image"><img src="../../assets/ting.png" alt=""></div>
                        <div class="card-massages">图标</div>
                    </div>
                    <div class="card">
                        <div class="card-image"><img src="../../assets/ting.png" alt=""></div>
                        <div class="card-massages">图标</div>
                    </div>
                </div>

            </div>
        </transition>
    </div>
</template>

<script>
export default {
    name: "",
    data() {
        return {
            //卡片是否展示 初始化
            show: false,
        };
    },
    methods: {
        //点击事件 跳转页面
        changeStyle(page) {
            this.show = false;
            this.$router.push("/" + page);
        },
    },
};
</script>

<style>
.header {
    height: 100px;
    width: 100%;
    position: relative;
    /* background-color: rgb(217, 217, 236); */
    border-top: 1px #bebbbb solid;
    border-bottom: 1px #bebbbb solid;
}
.left {
    float: left;
    position: relative;
    left: 250px;
}
.logo {
    float: left;
    width: 100px;
    height: 100px;
}
.right {
    position: relative;
    float: right;
    right: 150px;
}
.nav {
    float: left;
    line-height: 100px;
    font-size: 19px;
    padding: 0 15px;
    margin-right: 5px;
    /* background-color: #ebb2b2; */
}
.right a {
    float: left;
    height: 100px;
    line-height: 105px;
    padding: 0 10px;
    margin-right: 5px;
    color: #676464;
}

/* 更多模块 */
.show-card {
    height: 360px;
    width: 100%;
    padding: 25px 200px;
    border-bottom: 1px #bebbbb solid;
    /* background-color: rgb(114, 136, 129); */
}
.show-card h3 {
    font-size: 22px;
    line-height: 35px;
}
.tags-div {
    height: 60px;
    line-height: 60px;
    position: relative;
    padding-left: 70px;
    /* background-color: antiquewhite; */
}
.tags {
    float: left;
    font-size: 21px;
    font-weight: 700;
    margin-right: 45px;
}
.cards {
    position: relative;
}
.card {
    float: left;
    margin-top: 25px;
    width: 200px;
    height: 200px;
    margin-left: 50px;
    border-radius: 5%;
    background: #bebbbb;
    box-shadow: 1px 1px 8px #888888;
}
.card-image img {
    height: 160px;
    width: 200px;
}
.card-massages {
    font-size: 18px;
    text-align: center;
    line-height: 40px;
    /* background-color: #9c8e8e; */
}
/* 更多模块展示动画 */
.showcard-enter-active,.showcard-leave-active{
    transition: 0.5s;
}
.showcard-enter,.showcard-leave-to{
    opacity: 0;
    transform: translateY(-25rem);
}
</style>