<script lang="ts" setup>
import { defineAsyncComponent } from "vue";

const Feedback = defineAsyncComponent(() => import("./Feedback.vue"));
const TopicInfoOverview = defineAsyncComponent(() => import("./TopicInfoOverview.vue"));

interface config {
  _id: string;
  founder: string;
  founderName: string;
  founderAvaterID: string;
  title: string;
  text: string;
  appendixIDs: Array<string>;
  bgID: string;
  isDeleted: boolean;
}

type topicInfoType = {
  data: config;
};

const props = defineProps<topicInfoType>();
</script>

<template>
  <div class="h-full w-[45%] flex justify-center items-center">
    <div
      class="w-[90%] h-[95%] rounded-3xl flex justify-center items-center flex-col px-12 py-5 bg-[#7e56da81]"
    >
      <!-- title -->
      <div class="w-full h-[10%] text-3xl text-white">
        {{ props.data.title }}
      </div>

      <!-- avater -->
      <div class="w-full h-[10%] flex justify-start items-center py-4">
        <img
          :src="`http://localhost:5000/api/userAvaters/get/${props.data.founderAvaterID}`"
          alt="founder avater"
          class="h-full rounded-full"
        />

        <div class="ml-5 text-2xl text-white">
          {{ props.data.founderName }}
        </div>
      </div>

      <!-- main text -->
      <div class="w-full h-[50%] p-[5px]" v-html="props.data.text"></div>

      <!-- control area -->
      <div class="w-full h-[25%] grid grid-rows-3">
        <feedback></feedback>
        <div class="bg-red-300 row-span-2">appendixs</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
