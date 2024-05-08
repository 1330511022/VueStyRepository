<!-- Home.vue文件 -->
<template>
  <div class="home-container">
    <h3>Home 组件</h3>
    <a href="#" @click.prevent="gotoMovie(3)">跳转到MovieDetails组件</a>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
const gotoMovie = (movieId) => {
  router.push({
    name: "MovieDetails",
    params: { id: movieId },
  });
};
</script>

  <style scoped>
.home-container {
  min-height: 150px;
  background-color: #f2f2f2;
  padding: 15px;
}
</style>
  
  