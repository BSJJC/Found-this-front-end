<script lang="ts" setup>
import { ref } from "vue";

const sortWays = ref(["POPULAR", "CATEGORIES"]);
</script>

<template>
  <div class="w-full h-full grid grid-cols-4">
    <div class="col-span-3 flex justify-start items-start">
      <div
        v-for="(i, index) in sortWays"
        :key="index"
        class="h-full w-[200px] text-xl flex justify-start items-center text-[#bfbfbf] transition duration-200 ease-in-out hover:text-[#7E56DA] hover:cursor-pointer hover:font-bold"
      >
        {{ i }}
      </div>
    </div>
    <div class="col-span-1 flex justify-end items-center">
      <div
        class="px-8 py-5 rounded-lg bg-[#7E56DA] text-white text-xl transition duration-200 hover: cursor-pointer hover:shadow-lg hover:-translate-y-1"
      >
        + NEW TOPIC
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
* {
  user-select: none;
}
</style>
