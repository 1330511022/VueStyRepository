<template>
  小明的学习评定等级为：
  <p v-if="type === 'A'">优秀</p>
  <p v-else-if="type === 'B'">良好</p>
  <p v-else>差</p>
  <button @click="type = 'A'">切换为优秀</button>
  <button @click="type = 'B'">切换为良好</button>
  <button @click="type = 'C'">切换为差</button>
</template>

<script setup>
import { ref } from 'vue'
const type = ref('B')

</script>

<style>
</style>