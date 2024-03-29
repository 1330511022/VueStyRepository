<template>{{obj.message}}</template>


<script setup>
import { reactive } from "vue";
const obj = reactive({ message: "不畏浮云遮望眼，只缘身在最高层" });
setTimeout(() => {
  obj.message = "欲穷千里目，更上一层楼";
}, 2000);
</script>


<style>
</style>