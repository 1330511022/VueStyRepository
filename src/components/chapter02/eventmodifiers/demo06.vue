<!-- 监听滚动事件 用于优化移动端设备滚屏性能 -->
<template>
    <!-- 滚动事件的默认行为将会立即触发 -->
    <!-- 而不会等待'onScroll'完成 -->
    <div v-on:scroll.passive = "onScroll"></div>
</template>

<script setup>
</script>

<style>

</style>