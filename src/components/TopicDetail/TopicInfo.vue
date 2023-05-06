<script lang="ts" setup>
import { defineAsyncComponent } from "vue";

const heart = defineAsyncComponent(() => import("@/imgs/icons/heart.vue"));

interface config {
  _id: string;
  founder: string;
  founderUserName: string;
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
  <div class="h-full w-[45%] bg-red-300 flex justify-center items-center">
    <div
      class="w-[90%] h-[95%] bg-yellow-200 rounded-3xl flex justify-center items-center flex-col px-12 py-5"
    >
      <!-- title -->
      <div class="w-full h-[10%] bg-red-200 text-3xl text-white">
        {{ props.data.title }}
      </div>

      <!-- avater -->
      <div class="w-full h-[10%] bg-red-300 flex justify-start items-center py-4">
        <img
          :src="`http://localhost:5000/api/userAvaters/get/${props.data.founderAvaterID}`"
          alt="founder avater"
          class="h-full rounded-full"
        />

        <div class="ml-5 text-2xl text-white">
          {{ props.data.founderUserName }}
        </div>
      </div>

      <!-- main text -->
      <div class="w-full h-[50%] bg-blue-300 p-[5px]" v-html="props.data.text"></div>

      <!-- control area -->
      <div class="w-full h-[25%] bg-purple-300 grid grid-rows-3">
        <div>
          <heart color="#999999"></heart>
        </div>
        <div>2</div>
        <div>3</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
