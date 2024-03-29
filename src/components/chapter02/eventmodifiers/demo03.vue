<!-- 事件捕获 -->
<template>
  <!-- 内部元素button触发的事件div这里处理，然后才交由内部元素button进行处理 -->
  <div @click.capture="show('我是父元素组件')">
    <button @click="show('我是子元素组件')">事件捕获</button>
  </div>
</template>

<script setup>
let show = (message) => console.log(message);
</script>

<style>
</style>