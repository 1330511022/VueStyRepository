<template>
  <div v-for="item in list" :key="item.id">
    id是：{{ item.id }} -- 元素的内容是：{{ item.message }}
  </div>
</template>

<script setup>
import {reactive} from "vue";

const list = reactive([
  {id: 1, message: "梅"},
  {id: 2, message: "兰"},
  {id: 3, message: "竹"},
  {id: 4, message: "菊"},
]);
</script>

<style>
</style>