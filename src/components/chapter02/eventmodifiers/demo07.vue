<template>
  <input type="text" v-on:keyup.enter="submit" />
<!-- 如果想实现只有按下Enter键时才能触发事件（组合键alt+enter等不触发），
    可以通过.exact修饰符来实现，该修饰符允许控制由精确的系统修饰符组合触发的事件。 -->
    <input type="text" v-on:keyup.enter.exact="submit" />

</template>
  <script setup>
let submit = () => console.log("捕获到Enter键");
</script>


<!-- 
    
.enter：捕获Enter键。
.esc：捕获Esc键。
.tab：捕获Tab键。
.delete：捕获Delete和Backspace键。
.ctrl：捕获Ctrl键。
.alt：捕获Alt键。
.shift：捕获Shift键。
.meta：在MacOS系统的键盘上捕获command键；在Windows系统的键盘上捕获Windows徽标键 
.left：捕获鼠标左键。
.middle：捕获鼠标中键。
.right：捕获鼠标右键
-->