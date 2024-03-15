<template>
  <div>message的值:{{ message }}</div>
  <div>obj.message的值:{{ obj.message }}</div>
</template>


<script setup>
import { reactive, toRef } from "vue";
const obj = reactive({ message: "黑发不知勤学早，白首方悔读书迟" });
const message = toRef(obj, "message");
setTimeout(() => {
  message.value = "少壮不努力 老大徒伤悲";
}, 2000);
</script>


<style></style>