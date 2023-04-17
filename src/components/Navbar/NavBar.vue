<script lang="ts" setup>
import { defineAsyncComponent } from "vue";

const logo = defineAsyncComponent(() => import("@/components/logo.vue"));
const Search = defineAsyncComponent(
  () => import("@/components/Navbar/Search.vue")
);
const UserIcon = defineAsyncComponent(
  () => import("@/components/Navbar/UserIcon.vue")
);
</script>

<template>
  <div class="h-[100px] grid grid-cols-5 px-10 shadow-lg shadow-[#7e56da4d]">
    <div class="col-span-1 flex justify-left items-center">
      <logo class="text-5xl" :enable-go-to-home-page="false"></logo>
    </div>

    <div class="col-span-3 flex justify-center items-center">
      <search></search>
    </div>

    <div class="col-span-1 flex justify-end items-center">
      <user-icon></user-icon>
    </div>
  </div>
</template>
