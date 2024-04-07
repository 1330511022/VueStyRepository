<template>
  <input type="text" v-model="cityName" />
</template>

<script setup>
import { watch, ref } from "vue";
const cityName = ref("beijing");
watch(cityName, (newValue, oldValue) => {
  console.log(newValue, oldValue);
});
</script>

<style>
</style>