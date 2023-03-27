<script setup lang="ts">
import { defineAsyncComponent } from "vue";

const NavBar = defineAsyncComponent(
  () => import("@/components/Navbar/NavBar.vue")
);
const MainPage = defineAsyncComponent(
  () => import("@/components/MainPage/MainPage.vue")
);
</script>

<template>
  <div class="w-full h-full">
    <div class="h-[10%] shadow-lg shadow-[#7e56da4d] z-20">
      <nav-bar></nav-bar>
    </div>

    <div class="h-[90%] z-10">
      <main-page></main-page>
    </div>
  </div>
</template>

<style scoped></style>
