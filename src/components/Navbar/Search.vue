<script lang="ts" setup>
import { searchVue } from "@/imgs/icons";
</script>

<template>
  <div
    class="flex justify-center items-center flex-row w-[700px] h-[50px] rounded-3xl border shadow-md"
  >
    <!-- search input -->
    <div
      class="w-[calc(100%-100px)] flex justify-center items-center rounded-l-3xl"
    >
      <input
        class="w-5/6 outline-none text-xl text-[#7E56DA]"
        placeholder="I want..."
      />
    </div>

    <!-- search buttton -->
    <div
      class="w-[50px] h-[40px] rounded-3xl bg-[#7E56DA] shadow shadow-[#9375da] flex justify-center items-center cursor-pointer"
    >
      <search-vue color="white" class="w-[30px]"> </search-vue>
    </div>
  </div>
</template>
