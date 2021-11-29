<script setup>
defineProps({
  msg: String,
});
</script>

<template>
  <!-- Card container -->
  <div
    class="
      flex flex-col flex-nowrap
      rounded-lg
      custom-box-shadow
      m-5
      p-5
      w-full
      sm:w-1/2
      lg:my-4 lg:px-4 lg:w-1/4
    "
  >
    <!-- Column 1 -->
    <div>
      <img
        class="w-full rounded"
        src="../assets/400x300.png"
        alt="Sunset in the mountains"
      />
    </div>

    <!-- Column 2 -->
    <div class="px-6 py-4">
      <p class="text-center font-medium text-normal sm:text-lg">
        {{ msg }}
      </p>
    </div>

    <!-- Column 3 -->
    <div class="flex flex-grow self-center px-6 pt-4 pb-2">
      <button
        class="
          self-end
          bg-transparent
          uppercase
          py-2
          px-5
          border-4 border-black
          hover:text-white hover:bg-black hover:border-transparent
          rounded-full
          font-extrabold
          tracking-widest
          text-xs
          sm:text-base
        "
      >
        Read More
      </button>
    </div>
  </div>
</template>

<style scoped>
.custom-box-shadow {
  -webkit-box-shadow: 0 0 5px -2px #999;
  -moz-box-shadow: 0 0 5px -2px #999;
  box-shadow: 0 0 5px -2px #999;
}
</style>