<script lang="ts" setup>
import { ref, reactive, onBeforeMount, defineAsyncComponent } from "vue";

import Topic from "@/components/MainPage/Topic.vue";

const TopicInfo = defineAsyncComponent(
  () => import("@/components/TopicDetail/TopicInfo.vue")
);

const TopicReply = defineAsyncComponent(
  () => import("@/components/TopicDetail/TopicReply.vue")
);

const showMask = ref(true);

const topicDeatil = reactive({
  _id: "",
  founder: "",
  founderName: "",
  founderAvaterID: "",
  title: "",
  text: "",
  appendixIDs: [] as string[],
  bgID: "",
  isDeleted: false,
});

onBeforeMount(() => {
  const data = JSON.parse(sessionStorage.getItem("topicDetail")!);

  const {
    _id,
    founder,
    founderName,
    founderAvaterID,
    title,
    text,
    appendixIDs,
    bgID,
    isDeleted,
  } = data;

  topicDeatil._id = _id;
  topicDeatil.founder = founder;
  topicDeatil.founderName = founderName;
  topicDeatil.founderAvaterID = founderAvaterID;
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
  <main class="flex justify-center items-center w-screen h-screen p-10">
    <div
      class="w-full h-full flex justify-center items-center rounded-3xl overflow-hidden shadow-box shadow-[#7E56DA]"
    >
      <!-- topic info -->
      <topic-info :data="topicDeatil"></topic-info>

      <!-- replies -->
      <div
        class="flex justify-center items-start flex-col w-[55%] h-full bg-blue-300 p-5"
      >
        <el-scrollbar class="w-full pr-2">
          <topic-reply v-for="(i, index) in 1" :key="index"></topic-reply>
        </el-scrollbar>
      </div>
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
