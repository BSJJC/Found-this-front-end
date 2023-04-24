<script lang="ts" setup>
import { reactive, defineAsyncComponent, onBeforeMount } from "vue";

const topic = defineAsyncComponent(
  () => import("@/components/MainPage/Topic.vue")
);

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
  <topic :topic-info="topicDeatil"></topic>
</template>

<style lang="scss" scoped></style>
