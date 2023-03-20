<script lang="ts" setup>
import logo from "@/components/logo.vue";
import Search from "./Search.vue";
</script>

<template>
  <div class="grid grid-cols-5 px-10 h-full">
    <div class="col-span-1 flex justify-left items-center">
      <logo></logo>
    </div>
    <div class="col-span-3 flex justify-center items-center">
      <search></search>
    </div>
    <div class="col-span-1 flex justify-end items-center">3</div>
  </div>
</template>

<style scoped>
.el-input {
  width: 30rem;
  height: 40px;
  font-size: 18px;
}
</style>
