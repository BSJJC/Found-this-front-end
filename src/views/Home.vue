<script setup lang="ts">
import { defineAsyncComponent } from "vue";

const NavBar = defineAsyncComponent(
  () => import("@/components/Navbar/NavBar.vue")
);
const MainPage = defineAsyncComponent(
  () => import("@/components/MainPage/MainPage.vue")
);
const SquareBackground = defineAsyncComponent(
  () => import("@/components/Effects/SquareBackground.vue")
);
</script>

<template>
  <square-background
    class="w-screen h-screen absolute top-0 z-0"
  ></square-background>

  <div class="h-screen w-screen overflow-hidden relative">
    <nav-bar class="z-[50]"></nav-bar>

    <el-scrollbar height="90%">
      <main-page></main-page>
    </el-scrollbar>
  </div>
</template>
