<script lang="ts" setup>
import { defineAsyncComponent } from "vue";

const ArrowDown = defineAsyncComponent(() => import("@/imgs/icons/ArrowDown.vue"));
const Feedback = defineAsyncComponent(() => import("./Feedback.vue"));

const text = "";
</script>

<template>
  <div class="bg-red-500 w-full mb-5">
    <!-- respondent Information -->
    <div class="h-[70px] w-full bg-red-500 flex flex-row">
      <div class="h-full w-[70px] flex justify-center items-center bg-purple-300">1</div>
      <div class="h-full flex flex-col pl-3">
        <div class="h-1/2 flex items-end text-xl">Lorem ipsum dolor sit esse</div>
        <div class="h-1/2 flex items-start opacity-70 text-white">
          Mon May 15 2023 11:23:14 GMT+0800
        </div>
      </div>
    </div>

    <!-- body of reply -->
    <div class="bg-blue-500 w-full min-h-[70px] max-h-[140px]" v-html="text"></div>

    <!-- reply control -->
    <div class="bg-pink-300 w-full h-[50px] flex justify-between items-center">
      <div class="flex flex-row gap-3">
        <div class="">1 REPLY</div>
        <arrow-down color="black" class="w-[25px]"></arrow-down>
      </div>
      <feedback></feedback>
    </div>

    <!-- replies of reply -->
    <!--  -->
  </div>
  .
</template>

<style lang="scss" scoped></style>
