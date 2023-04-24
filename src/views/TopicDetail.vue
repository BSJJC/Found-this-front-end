<script lang="ts" setup>
import { ref, reactive, onBeforeMount, onMounted } from "vue";

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

onMounted(() => {
  setTimeout(() => {
    showMask.value = false;
  }, 500);
});
</script>

<template>
  <!-- mask -->
  <topic
    id="topic"
    :topic-info="topicDeatil"
    class="fixed w-screen h-screen bg-[#7E56DA]"
  ></topic>

  <div class="w-16 h-16 bg-red-300"></div>
</template>

<style lang="scss" scoped>
#topic {
  animation: mask-out 0.3s ease forwards;
}

@keyframes mask-out {
  99% {
    opacity: 0;
    display: block;
  }

  100% {
    opacity: 0;
    display: none;
    z-index: -1;
  }
}
</style>
