<script setup>
import Accordion from "./Accordion.vue";
import Tab from "./Tab.vue";
import { computed } from "vue";
import { useStore } from "vuex";
const store = useStore();
const jsonData = computed(() => {
  return store.state.jsonData;
});
</script>

<template>
  <div class="w-full md:w-3/5 bg-white shadow-md rounded mx-auto p-8">
    <!-- ********************************************************************************************* -->
    <div class="shadow-md">
      <!-- Accordion -->
      <div class="sm:hidden">
        <Accordion
          v-for="(item, idx) in jsonData"
          :key="idx"
          :idx="idx"
          :data="item"
        > 
          {{ item.title }}
        </Accordion>
      </div>
      
      <!-- Tabs -->
      <div class="xl:w-full xl:mx-0 hidden sm:block bg-white shadow rounded">
        <ul class="flex border-b-0 px-5">
          <Tab
            v-for="(item, idx) in jsonData"
            :key="idx"
            :idx="idx"
            :data="item"
          >
            {{ item.title }}
          </Tab>
        </ul>
        <!-- Tab Content -->
        <div class="p-4 text-left bg-gray-100" v-html="store.state.currentSelectionDesc"/>
      </div>
    </div>

    <!-- ********************************************************************************************* -->
    <!-- Explanation for 'banana' -->
    <div class="w-full bg-light-blue-500 mx-auto px-4 py-8 text-left">
      <code>
        The reason why <b><q>('b' + 'a' + + 'a' + 'a').toLowerCase()</q></b> is
        equal to -->
        <b><q>{{ ("b" + "a" + +"a" + "a").toLowerCase() }}</q></b>
        is because of <b>+'a'</b> attempting to convert <b>'a'</b> to a number
        which results to
        <b>NaN (Not a number).</b>

        <br /><br />

        'b' + 'a' + NaN + 'a' = ba<b>NaN</b>a
        <br />
        ('b' + 'a' + NaN + 'a').toLowerCase() = ba<b>nan</b>a
      </code>
    </div>
    
  </div>
</template>