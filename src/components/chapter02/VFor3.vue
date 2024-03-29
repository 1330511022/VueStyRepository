<template>
  <div v-for="(value, name) in user" :key="name">
    属性名：{{ name }}，属性值：{{ value }}
  </div>
</template>

<script setup>
import { reactive } from "vue";

const user = reactive({ id: 11, name: "小明", gender: "男" });
</script>

<style>
</style>