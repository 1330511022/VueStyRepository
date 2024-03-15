<template>
  <button @click="showinfo">输出信息</button>
</template>

<script setup>
const showinfo = () => {
  console.log("欢迎来到vue.js的world");
};
</script>

<style>
</style>