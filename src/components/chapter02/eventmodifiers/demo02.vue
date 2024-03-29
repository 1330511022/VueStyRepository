<!-- 阻止事件冒泡 -->

<template>
  <div v-on:click="show('我是父元素组件')">
    <!-- 点击此处button会冒泡 -->
    <button v-on:click="show('我是子元素组件')">事件冒泡</button>
    <!-- 点击此处button不会冒泡 -->
    <button v-on:click.stop="show('我是子元素组件')">阻止事件冒泡</button>
  </div>
</template>

<script setup>
    let show = message =>console.log(message);
</script>

<style>
</style>