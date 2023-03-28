<script lang="ts" setup>
import { ref } from "vue";
import { useHome } from "@/stores";
import { storeToRefs } from "pinia";

const sortWays = ref(["POPULAR", "CATEGORIES"]);

const homeStore = useHome();
const { showNavBar } = storeToRefs(homeStore);

const addNewTopicBtn = ref(null);

function addNewTopic() {
  showNavBar.value = !showNavBar.value;

  console.log(addNewTopicBtn.value);
}
</script>

<template>
  <div class="w-full h-[120px] grid grid-cols-4">
    <!-- topic sort ways -->
    <div class="col-span-3 flex justify-start items-start">
      <div
        v-for="(i, index) in sortWays"
        :key="index"
        class="h-full w-[200px] text-xl flex justify-start items-center text-[#bfbfbf] transition duration-200 ease-in-out hover:text-[#7E56DA] hover:cursor-pointer hover:font-bold"
      >
        {{ i }}
      </div>
    </div>

    <!-- add topic -->
    <div class="col-span-1 flex justify-end items-center">
      <div
        ref="addNewTopicBtn"
        class="z-20 px-8 py-5 rounded-lg bg-[#7E56DA] text-white text-xl transition duration-200 hover: cursor-pointer hover:shadow-[#7E56DA] hover:shadow-lg hover:scale-105 active:scale-100"
        @click="addNewTopic"
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
