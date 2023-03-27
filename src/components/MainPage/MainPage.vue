<script lang="ts" setup>
import { defineAsyncComponent } from "vue";

const MainPageControl = defineAsyncComponent(
  () => import("./MainPageControl.vue")
);
const Topic = defineAsyncComponent(() => import("./Topic.vue"));
const SquareBackground = defineAsyncComponent(
  () => import("@/components/Effects/SquareBackground.vue")
);
</script>

<template>
  <el-scrollbar>
    <div class="w-full h-full px-20">
      <main-page-control class="w-full h-[150px]"></main-page-control>

      <div class="w-full grid grid-cols-3">
        <topic v-for="(i, index) in 20" :key="index" class="z-10"></topic>
      </div>
    </div>
  </el-scrollbar>
</template>

<style scoped></style>
