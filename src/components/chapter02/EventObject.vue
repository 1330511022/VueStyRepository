<template>
  <div>count的值为:{{ count }}</div>
  <button @click="addCount">点击(count+1)</button>
  <br />
  <button @click="addCount(3,$event)">count+n</button>
</template>

<script setup>
import { ref } from "vue";
const count = ref(1);
const addCount = (n, event) => {
  count.value += n;
  if (count.value % 2 === 0) {
    event.target.style.border = "3px dotted";
  } else {
    event.target.style.border = "3px solid";
  }
};
</script>

<style>
</style>