<!-- 使事件只触发一次 -->
<template>
    <button @click.once="show('我是当前元素的单击事件且只执行一次')">只执行一次</button>
  
</template>

<script setup>
let show = (msg) => console.log(msg);
</script>

<style>

</style>