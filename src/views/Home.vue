<script setup lang="ts">
import { defineAsyncComponent } from "vue";

const NavBar = defineAsyncComponent(() => import("@/components/NavBar.vue"));
const MainPage = defineAsyncComponent(
  () => import("@/components/MainPage.vue")
);
</script>

<template>
  <div class="w-full h-full overflow-hidden">
    <div class="h-[10%]">
      <nav-bar></nav-bar>
    </div>
    <div class="h-[90%]">
      <main-page></main-page>
    </div>
  </div>
</template>

<style scoped></style>
