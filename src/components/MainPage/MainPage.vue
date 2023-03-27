<script lang="ts" setup>
import { defineAsyncComponent } from "vue";

const MainPageControl = defineAsyncComponent(
  () => import("./MainPageControl.vue")
);
const Topic = defineAsyncComponent(() => import("./Topic.vue"));
</script>

<template>
  <div class="w-full h-full px-20 bg">
    <main-page-control class="w-full h-[150px]"></main-page-control>

    <div class="w-full grid grid-cols-3">
      <topic v-for="(i, index) in 20" :key="index"></topic>
    </div>
  </div>
</template>

<style scoped></style>
