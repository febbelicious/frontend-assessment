<script setup>
import { ref } from "vue";
import Accordion from "../components/Accordion.vue";
import JsonData from "../data/data.json";
</script>

<template>
  <div class="w-full md:w-3/5 mx-auto p-8">
    <!-- Loop through each JsonData -->
    <div class="shadow-md">
      <Accordion
        v-for="i in JsonData"
        :key="i.title"
        :id="i.title"
        :content="i.content"
      >
        {{ i.title }}
      </Accordion>
    </div>

    <!-- Explanation for 'banana' -->
    <div class="w-full bg-light-blue-500 mx-auto px-4 py-8 text-left">
      <code>
        The reason why <b><q>('b' + 'a' + + 'a' + 'a').toLowerCase()</q></b> is
        equal to -->
        <b
          ><q>{{ ("b" + "a" + +"a" + "a").toLowerCase() }}</q></b
        >
        is because of <b>+'a'</b> attempting to convert <b>'a'</b> to a number
        which results to <b>NaN (Not a number).</b>

        <br /><br />

        'b' + 'a' + NaN + 'a' = ba<b>NaN</b>a
        <br />
        ('b' + 'a' + NaN + 'a').toLowerCase() = ba<b>nan</b>a
      </code>
    </div>
  </div>
</template>