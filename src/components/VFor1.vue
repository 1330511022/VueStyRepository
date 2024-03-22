<template>
  <div v-for="(item,index) in list" :key="index">
  索引：{{index}}，值：{{item}}

  </div>
</template>

<script setup>
import { reactive } from "vue";

const list = reactive(['HTML','CSS','JS'])

</script>

<style>

</style>