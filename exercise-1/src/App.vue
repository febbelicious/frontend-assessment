<script setup>
import Banner from "./components/Banner.vue";
import Card from "./components/Card.vue";
</script>

<template>
  <div class="">
    <Banner />
    <div class="my-6 mx-auto px-4 md:px-12">
      <div class="flex flex-wrap -mx-1 lg:-mx-4 justify-center">
        <Card
          msg="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incidicunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat."
        />
        <Card
          msg="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incidicunt ut labore et dolore magna aliqua."
        />
        <Card
          msg="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incidicunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco."
        />
      </div>
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
