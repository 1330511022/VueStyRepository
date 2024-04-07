<template>
  <p>初始msg:{{ msg }}</p>

  <p>反转之后的msg:{{ remsg }}</p>
  <button @click="updataMsg">修改msg</button>
</template>

<script setup>
import { ref,computed} from 'vue'
const msg = ref('hello vue')
const remsg = computed(()=>
  msg.value.split('').reverse().join('')
)
const updataMsg = computed(()=>
    msg.value = 'vue is good'
)
</script>

<style>
</style>