<script lang="ts" setup>
import { defineAsyncComponent } from "vue";

const logo = defineAsyncComponent(() => import("@/components/logo.vue"));
const Search = defineAsyncComponent(() => import("@/components/Search.vue"));
const UserIcon = defineAsyncComponent(
  () => import("@/components/UserIcon.vue")
);
</script>

<template>
  <div class="grid grid-cols-5 px-10 h-full">
    <div class="col-span-1 flex justify-left items-center">
      <logo class="text-5xl"></logo>
    </div>

    <div class="col-span-3 flex justify-center items-center">
      <search></search>
    </div>

    <div class="col-span-1 flex justify-end items-center">
      <user-icon></user-icon>
    </div>
  </div>
</template>

<style scoped>
.el-input {
  width: 30rem;
  height: 40px;
  font-size: 18px;
}
</style>
