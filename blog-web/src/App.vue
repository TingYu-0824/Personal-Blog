<template>
    <div id="app">
        <my-header></my-header>
        <router-view></router-view>
        <my-footer></my-footer>
    </div>
</template>

<script>
import MyHeader from "@/components/Header";
import MyFooter from "@/components/Footer";
export default {
    name: "App",
    components: {
        "my-header": MyHeader,
        "my-footer": MyFooter,
    },
};
</script>

<style>
</style>
