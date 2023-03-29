<template>
    <div>
        <div class="l-banan">
            <!-- 图片中心文字 -->
            <div class="img-content">
                <h1 class="m-title">timeline</h1>
                <p class="m-description">扫石共看山色坐，枕书同听雨声眠。</p>
            </div>
            <!-- 图片 -->
            <div class="l-image">
                <img class="image" src="../../assets/p1.jpg" alt="">
            </div>
        </div>
        <div class="timeline">
            <!-- 时间轴 -->
            <!-- 开始点 -->
            <div class="timeline-card">
                <div class="timeline-left">
                    <div class="timeline-left-node" style="width: 20px;height: 20px;left: -7px;"></div>
                    <div class="timeline-left-line" style="height: 60px;"></div>
                </div>
                <div class="timeline-right">
                    <div class="timeline-right-time" style="font-size: 18px; font-weight: 700;">时间线</div>
                </div>
            </div>
            <!-- 时间卡片 -->
            <div class="timeline-card" v-for="(timeCard) in timelineCard" :key="timeCard.id">
                <div class="timeline-left">
                    <div class="timeline-left-node"></div>
                    <div class="timeline-left-line"></div>
                </div>
                <div class="timeline-right">
                    <div class="timeline-right-time">{{ timeCard.time }}</div>
                    <div class="timeline-right-title">{{ timeCard.title }}</div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
    name: "",
    mounted() {
        this.$store.dispatch("getTimeline");
    },
    computed: {
        ...mapState({
            timelineCard: (state) => state.timeline.timelineCard,
        }),
    },
};
</script>

<style lang="less" scoped>
// 引入公共样式
@import "../../assets/css/common.less";

.timeline {
    margin: 60px 22%;
    padding: 60px 100px;
    background-color: #f3eded;
    border-radius: 15px;
    height: 100%;
    // width: 100%;
    position: relative;
    box-shadow: 0 0 10px 1px lightgray;
    &-card {
        position: relative;
    }
    &-left {
        margin-left: 5px;
        &-node {
            z-index: 5;
            position: absolute;
            top: 2px;
            left: -5px;
            width: 15px;
            height: 15px;
            margin-left: 5px;
            background-color: rgb(114, 141, 141);
            border-radius: 50%;
        }
        &-line {
            position: absolute;
            padding-top: 5px;
            top: 17px;
            height: 100%;
            border-left: 6px solid rgb(165, 172, 195);
        }
    }

    &-right {
        height: 100%;
        margin-left: 25px;
        &-time {
            font-size: 15px;
            color: rgb(0, 0, 0);
            margin-bottom: 15px;
            color: rgb(172, 172, 172);
        }

        &-title {
            padding: 20px 40px;
            border-radius: 10px;
            width: fit-content;
            font-size: 13px;
            background-color: #fff;
            box-shadow: 0 0 10px 1px lightgray;
            margin-bottom: 20px;
            margin-left: 20px;
            &:hover {
                cursor: pointer;
                position: relative;
                bottom: 4px;
            }
        }
    }
}
</style>