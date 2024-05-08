<template>
  <Child :init="username" />
  <Child :init="age" />
  <Child :init="isFlag" />
  <Child :init="['唱歌', '跳舞', '滑冰']" />
  <Child :init="hobby" />
  <Child
    :init="{
      height: '180cm',
      weight: '60kg',
    }"
  />
  <Child :height="bodyInfo.height" :weight="bodyInfo.weight" />
  <Child v-bind="bodyInfo" />
</template>

<script setup>
import { reactive, ref } from "vue";
import Child from "./Child.vue";
const username = ref("小圆");
const age = ref(18);
const isFlag = ref(true);
const hobby = ref(["唱歌", "跳舞", "滑冰"]);
const bodyInfo = reactive({
    height: '180cm',
    weight: '60kg',
});
</script>

<style>
</style>