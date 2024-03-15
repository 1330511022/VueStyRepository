<template>
  {{ message }}
</template>


<script setup>
import { ref } from "vue";
const message = ref("会当凌绝顶，一览众山小");
setTimeout(()=>{
    message.value = '锲而不舍，金石可镂'
},2000)

</script>


<style>
</style>