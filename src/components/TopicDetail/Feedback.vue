<script lang="ts" setup>
import { defineAsyncComponent } from "vue";

const heart = defineAsyncComponent(() => import("@/imgs/icons/heart.vue"));
const share = defineAsyncComponent(() => import("@/imgs/icons/share.vue"));
const favorite = defineAsyncComponent(() => import("@/imgs/icons/favorite.vue"));
const reply = defineAsyncComponent(() => import("@/imgs/icons/reply.vue"));
</script>

<template>
  <div class="h-full bg-red-500 flex justify-start items-center">
    <!-- like -->
    <div
      class="flex justify-center items-center h-1/2 px-3 bg-blue-300 text-xl text-white rounded-full gap-2 mr-2"
    >
      80
      <heart color="white" class="h-1/2"></heart>
    </div>

    <!-- share -->
    <div
      class="flex justify-center items-center h-1/2 px-3 bg-blue-300 text-xl text-white rounded-full gap-2 mr-2"
    >
      <share color="" class="h-2/3"></share>
    </div>

    <!-- favorite -->
    <div
      class="flex justify-center items-center h-1/2 px-3 bg-blue-300 text-xl text-white rounded-full gap-2 mr-2"
    >
      <favorite color="white" class="h-1/2"></favorite>
    </div>

    <!-- reply -->
    <div
      class="flex justify-center items-center h-1/2 px-3 bg-blue-300 text-xl text-white rounded-full gap-2 mr-2"
    >
      <reply color="white" class="h-2/3"></reply>
      Reply
    </div>
  </div>
</template>

<style lang="scss" scoped>
* {
  user-select: none;
  -webkit-user-select: none;
}
</style>
