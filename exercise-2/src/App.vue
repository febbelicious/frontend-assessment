<script setup>
import AccordionTabContainer from "./components/AccordionTabContainer.vue";
import { onBeforeMount } from "vue";
import { useStore } from "vuex";
const store = useStore();
const beforeCreate = onBeforeMount(() => {
  store.commit("initializeStore");
});
</script>

<template>
  <AccordionTabContainer />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
html {
  background-color: #e5e7eb;
}
</style>
