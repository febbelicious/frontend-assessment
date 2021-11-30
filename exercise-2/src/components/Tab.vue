<script setup>
defineProps({
  id: Number,
  data: Object,
});

import { computed, onMounted } from "vue";
import { useStore } from "vuex";

const store = useStore();
const currentSelection = computed(() => {
  return store.state.currentSelection;
});

const isSameSelection = (v1, v2) => {
  return v1 === v2;
};
const isDataNotEmpty = () => {
  // check if json data is empty.
  return store.state.jsonData.length > 0 && store.state.jsonData != null;
};

// On mounted, let's open the first tab
const mounted = onMounted(() => {
  if (store.state.currentSelection === "" && isDataNotEmpty())
    store.dispatch("saveSelection", store.state.jsonData[0]);
});

const selectionHandler = (selection) => {
  if (!isSameSelection(currentSelection.value, selection.title))
    // user clicked on a new tab, let's set the current tab.
    store.dispatch("saveSelection", selection);
};
</script>

<template>
  <li class="w-full border-indigo-500 rounded-t pt-3 mr-12 cursor-pointer" v-on:click="selectionHandler(data)">
    <div class="flex items-center mb-3 hover:text-indigo-700">
      <span class="font-bold cursor-pointer">{{ data.title }}</span>
    </div>
    <div
      class="w-full h-1 animate-pulse border-b-2 border-indigo-500 rounded-t-md transform transition-transform duration-500"
      :class="{ hidden: currentSelection !== data.title, block: currentSelection === data.title }"
    />
  </li>
</template>