<template>
  <p v-if="flag">通过v-if控制的元素</p>
  <p v-show="flag">通过v-show控制的元素</p>
  <button @click="flag = !flag">切换</button>
</template>

<script setup>
import { ref } from "vue";

const flag = ref(true);


</script>

<style>

</style>