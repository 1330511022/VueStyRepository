<template>
  <div>message的值:{{ message }}</div>
  <div>obj.message的值:{{ obj.message }}</div>

</template>

<script setup>
import { reactive, toRefs } from "vue";
const obj = reactive({ message: "盛年不重来，一日难再晨" });
let { message } = toRefs(obj);
setTimeout(() => {
  message.value = "及时当勉励，岁月不待人";
}, 2000);
</script>

<style></style>