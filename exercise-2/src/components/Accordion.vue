<script setup>
// Props from AccordionContainer.vue
defineProps({
  id: String,
  content: String,
});

import { computed, onMounted } from "vue";
import { useStore } from "vuex";
const store = useStore();
const openAccordion = computed(() => {
  return store.state.openAccordion;
});

// On mounted, let's open the first accordion
const mounted = onMounted(() => {
  if (store.state.openAccordion === "")
    store.dispatch("saveAccordion", "Section 1"); //todo: Need to check if Section 1 exists.
});

function toggleAccordion(accordionId) {
  if (isSameAccordion(openAccordion.value, accordionId)) {
    // user clicked on the same accordion, let's close it then.
    store.dispatch("saveAccordion", "");
  } else {
    // user clicked on a new accordion, let's set the current accordion.
    store.dispatch("saveAccordion", accordionId);
  }
}

function isSameAccordion(v1, v2) {
  return v1 === v2;
}
</script>


<template>
  <div class="tab w-full overflow-hidden border-t">
    <!-- Accordion Title -->
    <label
      v-on:click="toggleAccordion(id)"
      class="block p-5 leading-normal cursor-pointer text-left"
      for="tab-single-one"
    >
      <div class="flow-root">
        <p class="float-left font-bold"><slot /></p>
        <p
          :class="
            openAccordion !== '' && openAccordion === id ? '-rotate-180' : ''
          "
          class="
            transform
            float-right
            transition-transform
            duration-500
            font-extrabold
          "
        >
          ^
        </p>
      </div>
    </label>

    <!-- Accordion Content -->
    <div
      :class="{
        'max-h-0': openAccordion !== id,
        'max-h-screen': openAccordion === id,
      }"
      class="
        tab-content
        overflow-hidden
        border-l-2
        bg-gray-100
        border-indigo-500
        leading-normal
        text-left
        relative
        overflow-hidden
        transition-all
        duration-700
      "
    >
      <div class="p-4" v-html="content"></div>
    </div>
  </div>
</template>