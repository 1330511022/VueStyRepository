<template>
  <div class="container">container</div>
</template>

<script setup>
import { onMounted, onBeforeMount } from "vue";
onMounted(() => {
  console.log("DOM元素渲染后:" + document.querySelector(".container"));
});
onBeforeMount(() => {
  console.log("DOM元素渲染前:" + document.querySelector(".container"));
});
</script>
<style>
</style>