<template>
  请输入姓名：<input type="text" v-model="name" /><br />
  姓名：{{ name }}

  <hr />
  <br />
  <input type="text" v-model="n1" />
  +<input type="text" v-model="n2" />={{ n1 + n2 }}

  <hr />
  <br />

  <input type="text" v-model.number="n1" />
  +<input type="text" v-model.number="n2" />={{ n1 + n2 }}


</template>

<script setup>
import { ref } from "vue";
const name = ref("张三");

const n1 = ref(1);
const n2 = ref(2);
</script>

<style>
</style>