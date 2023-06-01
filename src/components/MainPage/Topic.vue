<script lang="ts" setup>
import Avater from "@/components/Avater.vue";
import BackgroundImg from "@/components/BackgroundImg.vue";

interface config {
  _id: string;
  founder: string;
  founderAvaterID: string;
  title: string;
  text: string;
  appendixIDs: Array<string>;
  bgID: string;
  isDeleted: boolean;
}

type topicInfoType = {
  topicInfo: config;
};

const props = defineProps<topicInfoType>();
</script>

<template>
  <div class="topic flex justify-center items-center w-1/3 h-[400px] mb-5">
    <div
      class="w-[90%] max-w-[800px] h-[100%] max-h-[600px] rounded-xl overflow-hidden p-[30px] bg-white shadow-lg shadow-[#d5d5d5] transition duration-300 hover:cursor-pointer hover:shadow-xl hover:shadow-[#7e56da] hover:scale-105 active:scale-100">
      <!-- title -->
      <div class="w-full h-1/3 rounded-xl overflow-hidden flex justify-start items-center relative">
        <div class="absolute w-full h-full flex justify-start items-center p-8 z-10 text-white text-3xl">
          {{ props.topicInfo.title.slice(0, 20) }}
        </div>

        <background-img :src="`http://localhost:5000/api/topic/bg/download/${props.topicInfo.bgID}`" alt="test"
          class="absolute z-0"></background-img>
      </div>

      <!-- info -->
      <div class="w-full h-2/3 pt-6 grid grid-rows-2">
        <div class="w-full h-full flex justify-center items-center flex-row">
          <!-- topics -->
          <div class="w-[25%] h-full flex justify-center items-center flex-col">
            <div class="w-full h-1/3 text-md flex justify-start items-center text-[#adadad]">
              REPLIES
            </div>
            <div class="w-full h-2/3 text-2xl text-[#5d5d5d]">114514</div>
          </div>

          <!-- last active -->
          <div class="w-[75%] h-full">
            <div class="w-full h-full flex justify-center items-center flex-col pl-8">
              <div class="w-full h-1/3 text-md flex justify-start items-center flex-row text-[#adadad]">
                LAST ACTIVE
              </div>
              <div class="w-full h-2/3 text-2xl text-[#5d5d5d]">114514</div>
            </div>
          </div>
        </div>

        <!-- last topic -->
        <div class="w-full h-full flex justify-center items-center flex-col">
          <div class="w-full h-1/3 text-md flex justify-start items-center flex-row text-[#adadad]">
            LAST REPLY
          </div>

          <div class="w-full h-2/3 text-2xl text-[#5d5d5d] flex justify-center items-center flex-row">
            <div class="h-full w-[20%] flex justify-start items-center">
              <Avater :src="`http://localhost:5000/api/userAvaters/get/${props.topicInfo.founderAvaterID}`"
                alt="topic founder avatar" loading-text="loading"></Avater>
            </div>
            <div class="h-full w-[80%] text-[1.2rem] overflow-clip">
              Lorem ipsum, dolor sit amet consectetur consectetur consectetur consectetur
              consectetur
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
