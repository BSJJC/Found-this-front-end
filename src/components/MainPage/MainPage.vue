<script lang="ts" setup>
import { defineAsyncComponent } from "vue";
import { useTopics } from "@/stores";
import { storeToRefs } from "pinia";

const topicStore = useTopics();
const { topics } = storeToRefs(topicStore);

const MainPageControl = defineAsyncComponent(
  () => import("./MainPageControl.vue")
);
const Topic = defineAsyncComponent(() => import("./Topic.vue"));
</script>

<template>
  <div class="px-20">
    <main-page-control></main-page-control>

    <div class="w-full grid grid-cols-3">
      <transition-group name="opacity-scale">
        <topic v-for="(i, index) in topics" :key="topics[index]"></topic>
      </transition-group>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@/scss/animations.scss";

.opacity-scale-move {
  transition: all 0.3s ease-in-out;
}
</style>
