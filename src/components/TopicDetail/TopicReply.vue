<script lang="ts" setup>
import { defineAsyncComponent, ref, onMounted } from "vue";

const ArrowDown = defineAsyncComponent(() => import("@/imgs/icons/ArrowDown.vue"));
const Feedback = defineAsyncComponent(() => import("./Feedback.vue"));

const repliesOfReply = ref();

const text = "dasdasdsada";
const repliesHeight = ref(150);

onMounted(() => {
  console.log(repliesOfReply.value);

  let rect = repliesOfReply.value[0].getBoundingClientRect();

  repliesHeight.value = rect.height;
});
</script>

<template>
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
      <arrow-down color="black" class="w-[25px] hover:cursor-pointer"></arrow-down>
    </div>
    <feedback></feedback>
  </div>

  <div class="flex justify-center items-center flex-row my-2">
    <!-- height of replies -->
    <div
      class="w-[2%] flex justify-center items-center"
      :style="{ height: `${repliesHeight + 20}px` }"
    >
      <div class="h-full w-[3px] bg-gray-500 rounded-full"></div>
    </div>

    <!-- replies of reply -->
    <div
      class="w-[98%] flex justify-center items-center flex-col"
      v-for="(i, index) in 2"
      :key="index"
    >
      <!--  body of the reply of topic -->
      <div class="w-full" ref="repliesOfReply">
        <div class="h-[70px] w-full bg-red-500 flex flex-row">
          <div class="h-full w-[70px] flex justify-center items-center bg-purple-300">
            user icon
          </div>
          <div class="h-full flex flex-col pl-3">
            <div class="h-1/2 flex items-end text-xl">Lorem ipsum dolor sit esse</div>
            <div class="h-1/2 flex items-start opacity-70 text-white">
              Mon May 15 2023 11:23:14 GMT+0800
            </div>
          </div>
        </div>

        <div class="bg-blue-500 w-full min-h-[70px] max-h-[140px]" v-html="text"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
