<script setup lang="ts">
import NavBar from "@/components/NavBar.vue";
import MainPage from "@/components/MainPage.vue";
</script>

<template>
  <el-container class="h-full">
    <el-header class="bg-red-200">
      <nav-bar></nav-bar>
    </el-header>
    <el-main class="bg-yellow-200 h-full">
      <main-page></main-page>
    </el-main>
  </el-container>
</template>

<style scoped></style>
