<script lang="ts" setup>
import { defineAsyncComponent } from "vue";

const MainPageControl = defineAsyncComponent(
  () => import("./MainPageControl.vue")
);
</script>

<template>
  <div class="w-full h-full px-20 bg">
    <main-page-control class="w-full h-[150px]"></main-page-control>
  </div>
</template>

<style scoped></style>
