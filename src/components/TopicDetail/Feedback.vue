<script lang="ts" setup>
import { defineAsyncComponent } from "vue";

const heart = defineAsyncComponent(() => import("@/imgs/icons/heart.vue"));
const reply = defineAsyncComponent(() => import("@/imgs/icons/reply.vue"));
</script>

<template>
  <div class="h-full flex justify-start items-center">
    <!-- like -->
    <div class="btn">
      80
      <heart color="white" class="h-1/2"></heart>
    </div>

    <!-- reply -->
    <div class="btn">
      Reply
      <reply color="white" class="h-2/3"></reply>
    </div>
  </div>
</template>

<style lang="scss" scoped>
* {
  user-select: none;
  -webkit-user-select: none;
}

.btn {
  @apply flex justify-center items-center h-1/2 px-3 text-xl text-white rounded-full gap-2 mr-2 bg-gray-400 bg-opacity-80 hover:cursor-pointer;
}
</style>
