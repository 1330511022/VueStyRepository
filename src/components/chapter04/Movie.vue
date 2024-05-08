<template>
  <div class="movie-container">
    <router-link to="/movie/1">电影1</router-link>
    <router-link to="/movie/2">电影2</router-link>
    <router-link to="/movie/3">电影3</router-link>
    <hr />
    <router-view></router-view>
  </div>
</template>
  <style>
.movie-container {
  min-height: 150px;
  background-color: #f2f2f2;
}
.movie-container a {
  padding: 0 5px;
  font-size: 18px;
  border: 1px solid #ccc;
  border-radius: 5px;
  color: #000;
  margin: 0 5px;
}
</style>
