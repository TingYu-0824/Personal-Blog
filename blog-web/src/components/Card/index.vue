<template>
    <div class="card-t">
        <el-row class="el-row">
            <el-col class="el-col" v-for="(card) in blogCard" :key="card.id">
                <el-card class="card-blog" shadow="hover" :body-style="{ padding: '0px' }">
                    <img class="image" :src="card.imgUrl">
                    <div class="card-tag">{{card.tag}}</div>
                    <div class="card-message">
                        <h1>{{ card.title }}</h1>
                        <div class="card-m">{{ card.introduction }}</div>
                        <div class="card-time">{{ card.publicTime }}</div>
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    name: "card",
    props:['blogCard']
};
</script>

<style>
.card-t {
    width: 80%;
    margin: 0 auto;
}
.el-row {
    /**
  卡片居中
  */
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
}
.el-col {
    margin-right: 40px;
    position: relative;
    margin-top: 40px;
    width: 350px;
    height: 480px;
    border-radius: 5%;
}
.card-blog {
    width: 100%;
    height: 100%;
    border-radius: 5%;
    transition: margin-top 0.4s, margin-left 0.4s;
}
.card-blog:hover {
    margin-top: -10px;
    margin-left: -10px;
}
.image {
    width: 100%;
    display: block;
}
.card-tag {
    width: 60px;
    height: 30px;
    margin-top: 10px;
    margin-left: 16px;
    border-radius: 17px;
    text-align: center;
    line-height: 30px;
    font-size: 15px;
    font-family: "Courier New", Courier, monospace;
    color: rgb(255, 255, 255);
    background-color: rgb(79, 187, 175);
}
.card-message {
    text-align: center;
    /* position: relative; */
}
.card-message h1 {
    font-size: 24px;
    margin: 10px 0 5px 0;
}
.card-m {
    font-size: 13px;
    padding: 17px 50px;
    line-height: 20px;
}
.card-time {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 60px;
    line-height: 60px;
    font-size: 16px;
    color: rgb(139, 142, 142);
    /* margin: 0 15px; */
    border-top: 0.5px solid rgb(223, 223, 228);
    /* border-bottom: 0.5px solid rgb(236, 236, 239); */
}
</style>
