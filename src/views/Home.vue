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
  <div class="h-screen overflow-hidden">
    <transition>
      <nav-bar></nav-bar>
    </transition>

    <el-scrollbar height="90%">
      <main-page></main-page>
    </el-scrollbar>
  </div>
</template>
