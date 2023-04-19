<script lang="ts" setup>
import { defineAsyncComponent, onBeforeMount } from "vue";
import { useTopics } from "@/stores";
import { storeToRefs } from "pinia";

import getTopicInfos from "@/api/topic/getTopicInfos";

const topicStore = useTopics();
const { topics } = storeToRefs(topicStore);

const MainPageControl = defineAsyncComponent(
  () => import("./MainPageControl.vue")
);
const Topic = defineAsyncComponent(() => import("./Topic.vue"));

onBeforeMount(() => {
  getTopicInfos().then((res) => {
    topics.value = res.data;
  });
});

setTimeout(() => {
  topics.value.reverse();
}, 1000);

setTimeout(() => {
  topics.value.splice(1, 1);
}, 2000);

setTimeout(() => {
  topics.value.splice(0, 1);
}, 3000);

setTimeout(() => {
  topics.value.splice(2, 1);
}, 4000);

setTimeout(() => {
  topics.value.splice(0, 1);
}, 5000);

setTimeout(() => {
  topics.value.splice(0, 1);
}, 6000);

setTimeout(() => {
  topics.value.splice(0, 1);
}, 7000);
</script>

<template>
  <div class="px-20">
    <main-page-control></main-page-control>

    <div class="w-full flex justify-start items-center flex-wrap relative">
      <transition-group name="topic">
        <topic
          v-for="(i, index) in topics"
          :key="topics[index]"
          :topic-info="i"
        ></topic>
      </transition-group>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@/scss/animations.scss";


</style>
