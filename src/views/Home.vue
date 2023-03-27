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
    <div class="h-[10%] shadow-lg z-20">
      <nav-bar></nav-bar>
    </div>

    <div class="h-[90%] z-10">
      <el-scrollbar>
        <main-page></main-page>
      </el-scrollbar>
    </div>
  </div>
</template>

<style scoped></style>
