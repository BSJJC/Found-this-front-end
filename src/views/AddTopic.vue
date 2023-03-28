<script lang="ts" setup></script>

<template>
  <!-- mask -->
  <div
    id="mask-out"
    class="w-screen h-screen bg-[#7E56DA] flex justify-center items-center text-[5rem] text-white"
  >
    ADD NEW TOPIC
  </div>
</template>

<style lang="scss" scoped>
#mask-out {
  animation: mask-out 0.3s ease-in-out forwards;
}

@keyframes mask-out {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}
</style>
