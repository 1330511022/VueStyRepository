<!-- 使DOM元素只有自身触发事件时才执行事件方法 -->
<template>
  <div @click="show('我是祖先元素事件')">
    祖先元素
    <div @click.self="show('我是父元素事件')">
      父元素
      <div @click="show('我是子元素事件')">子元素</div>
    </div>
  </div>
</template>

<script setup>
let show = (msg) =>console.log(msg);
</script>

<style>
</style>