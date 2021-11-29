<script setup>
import imagePath from "../assets/1920x650.png";
import Card from "../components/Card.vue";
</script>

<template>
  <div class="mx-auto relative">
    <!-- Mobile Image -->
    <img
      src="../assets/600x600.png"
      alt=""
      class="w-full h-full object-cover desktop object-center"
    />

    <!-- Desktop Image -->
    <img
      src="../assets/1920x650.png"
      alt=""
      class="w-full h-full object-cover mobile object-center"
    />

    <!-- Message -->
    <div class="text-center w-full absolute top-1/4 sm:top-1/3 xl:p-4 xl:pt-10">
      <p class="text-white text-5xl xxs:text-6xl lg:text-7xl font-bold">
        Hello Developer!
      </p>
      <p class="text-white text-2xl sm:text-4xl lg:text-5xl font-normal pt-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </p>
    </div>
  </div>
</template>

<style scoped>
@media (min-width: 640px) {
  img.desktop {
    display: none;
  }
}
@media (max-width: 640px) {
  img.mobile {
    display: none;
  }
}
</style>