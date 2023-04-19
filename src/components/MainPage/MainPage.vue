<script lang="ts" setup>
import { ref, reactive, defineAsyncComponent, onBeforeMount } from "vue";
import { useTopics } from "@/stores";
import { storeToRefs } from "pinia";

import getTopicInfos from "@/api/topic/getTopicInfos";

const topicStore = useTopics();
const { topics } = storeToRefs(topicStore);

const MainPageControl = defineAsyncComponent(
  () => import("./MainPageControl.vue")
);
const Topic = defineAsyncComponent(() => import("./Topic.vue"));

const copyEl = reactive({
  top: 0,
  left: 0,
  width: 0,
  height: 0,
});
const copyElIndex = ref(0);
const showTele = ref(false);

function showTopic(index: number) {
  const topic = document.getElementsByClassName("topic")[index];

  const reactObject = (topic as HTMLElement).getBoundingClientRect();

  copyEl.top = reactObject.top;
  copyEl.left = reactObject.left;
  copyEl.width = reactObject.width;
  copyEl.height = reactObject.height;

  copyElIndex.value = index;

  showTele.value = true;
}

onBeforeMount(() => {
  getTopicInfos().then((res) => {
    topics.value = res.data;
  });
});
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
          @click="showTopic(index)"
        ></topic>
      </transition-group>

      <teleport to="body">
        <div
          v-if="showTele"
          id="copyEl"
          class="absolute top-0 bg-[#7E56DA] z-[500] flex justify-center items-center"
          :style="{
            top: `${copyEl.top}px`,
            left: `${copyEl.left}px`,
            width: `${copyEl.width}px`,
            height: `${copyEl.height}px`,
          }"
        >
          <topic
            :topic-info="topics[copyElIndex]"
            :style="{
              width: `${copyEl.width * 5}px`,
              height: `${copyEl.height * 2}px`,
            }"
          ></topic>
        </div>
      </teleport>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@/scss/animations.scss";

* {
  user-select: none;
}

#copyEl {
  animation: copyEl 0.5s ease forwards;
}

@keyframes copyEl {
  100% {
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    opacity: 1;
  }
}
</style>
