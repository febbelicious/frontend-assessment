<script setup>
defineProps({
  id: Number,
  data: Object,
});

import { ChevronUpIcon } from "@heroicons/vue/outline";
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

// On mounted, let's open the first accordion
const mounted = onMounted(() => {
  if (store.state.currentSelection === "" && isDataNotEmpty())
    store.dispatch("saveSelection", store.state.jsonData[0]); // first item on our jsondata.
});

const selectionHandler = (selection) => {
  if (isSameSelection(currentSelection.value, selection.title)) {
    // user clicked on the same accordion, let's close it then.
    store.dispatch("saveSelection", "");
  } else {
    // user clicked on a new accordion, let's set the current accordion.
    store.dispatch("saveSelection", selection);
  }
};
</script>


<template>
  <div class="tab w-full overflow-hidden border-t">
    <!-- ********************************************************************************************* -->
    <!-- Accordion Title -->
    <label
      v-on:click="selectionHandler(data)"
      class="block p-5 leading-normal cursor-pointer text-left"
    >
      <div class="flow-root">
        <p class="float-left font-bold hover:text-indigo-700"><slot /></p>
        <p class="transform float-right transition-transform duration-500 font-extrabold"
          :class=" currentSelection !== '' && currentSelection === data.title ? '-rotate-180' : '' "
        >
          <ChevronUpIcon class="h-6 w-6" aria-hidden="true" />
        </p>
      </div>
    </label>

    <!-- ********************************************************************************************* -->
    <!-- Accordion Content -->
    <div
      class="
        overflow-hidden
        border-l-2 border-indigo-500
        bg-gray-100
        text-left
        relative
        transition-all
        duration-700 
      "
      :class="{
        'max-h-0': currentSelection !== data.title,
        'max-h-screen': currentSelection === data.title,
      }"
    >
      <div class="p-4" v-html="data.content" />
    </div>
  </div>
</template>