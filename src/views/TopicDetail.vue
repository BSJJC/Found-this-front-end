<script lang="ts" setup>
import { ref, reactive, onBeforeMount, defineAsyncComponent } from "vue";

import Topic from "@/components/MainPage/Topic.vue";

const showMask = ref(true);

const topicDeatil = reactive({
  _id: "",
  founder: "",
  title: "",
  text: "",
  appendixIDs: [] as string[],
  bgID: "",
  isDeleted: false,
});

onBeforeMount(() => {
  const data = JSON.parse(sessionStorage.getItem("topicDetail")!);

  const { _id, founder, title, text, appendixIDs, bgID, isDeleted } = data;

  topicDeatil._id = _id;
  topicDeatil.founder = founder;
  topicDeatil.title = title;
  topicDeatil.text = text;
  topicDeatil.appendixIDs = appendixIDs;
  topicDeatil.bgID = bgID;
  topicDeatil.isDeleted = isDeleted;
});
</script>

<template>
  <!-- mask -->
  <topic
    v-if="showMask"
    id="mask"
    :topic-info="topicDeatil"
    class="fixed w-screen h-screen bg-[#7E56DA]"
  ></topic>

  <!-- main -->
  <main class="flex justify-center items-center w-screen h-screen p-3">
    <div
      class="w-full h-full flex justify-center items-center rounded-3xl overflow-hidden shadow-xl shadow-[#7E56DA]"
    >
      <!-- topic details -->
      <div class="h-full w-[45%] bg-red-300 flex justify-center items-center">
        <div
          class="w-[90%] h-[95%] bg-yellow-200 rounded-3xl flex justify-center items-center flex-col p-12"
        >
          <!-- title -->
          <div class="w-full bg-red-200 text-3xl">
            {{ topicDeatil.title }}
          </div>

          <!-- avater -->
          <div>
            {{ topicDeatil._id }}
          </div>
        </div>
      </div>

      <!-- replies -->
      <div class="flex h-full w-[55%] bg-blue-300">2</div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
#mask {
  animation: mask-out 0.5s ease forwards;
}

@keyframes mask-out {
  99% {
    opacity: 0;
    display: block;
    z-index: 100;
  }

  100% {
    opacity: 0;
    display: none;
    z-index: -1;
  }
}
</style>
