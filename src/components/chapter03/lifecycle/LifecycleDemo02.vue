<template></template>

<script>
export default {
  data() {
    return {
      value: "Hello,Vue",
    };
  },
  beforeCreate() {
    console.log("实例对象创建之前：" + this.value);
  },
  created() {
    console.log("实例对象创建之后：" + this.value);
  },
};
</script>

<style>
</style>