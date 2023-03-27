<script lang="ts" setup>
const url = `http://localhost:5000/api/topicBackground/64210f2e07d89082ede20e46`;
</script>

<template>
  <div
    class="w-[80%] h-[400px] m-[20px] rounded-xl overflow-hidden p-[30px] bg-white shadow-lg shadow-[#d5d5d5] transition duration-300 hover:cursor-pointer hover:shadow-xl hover:shadow-[#7e56da] hover:-translate-y-1"
  >
    <!-- title -->
    <div class="w-full h-1/3 rounded-xl overflow-hidden relative bg-blue-300">
      <img :src="url" class="w-full h-full absolute z-0" />
      <div class="z-10 text-white">123</div>
    </div>

    <!-- info -->
    <div class="w-full h-2/3 bg-red-300">
      
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
