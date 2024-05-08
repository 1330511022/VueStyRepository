<template>
  <h5>父组件</h5>
  <div class="box">
    <global-component></global-component>
    <local-component></local-component>
  </div>
</template>

<script setup>
import GlobalComponent from "../demo01/GlobalComponent.vue";
import LocalComponent from "../demo01/LocalComponent.vue";
</script>

<style scoped>
.box {
  display: flex;
}
h5{
    border: 1px dotted black;
}
:deep(.title){
    border: 3px dotted black;
}
</style>