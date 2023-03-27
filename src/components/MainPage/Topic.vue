<script lang="ts" setup>
const url = `http://localhost:5000/api/topicBackground/64210f2e07d89082ede20e46`;
</script>

<template>
  <div
    class="w-[80%] h-[400px] m-[20px] rounded-xl overflow-hidden p-[30px] bg-white shadow-lg shadow-[#d5d5d5] transition duration-300 hover:cursor-pointer hover:shadow-xl hover:shadow-[#7e56da] hover:-translate-y-1"
  >
    <!-- title -->
    <div
      class="w-full h-1/3 rounded-xl overflow-hidden relative flex justify-start items-center p-8 bg-blue-300"
      :style="{ backgroundImage: `url(${url})`, backgroundSize: 'contain' }"
    >
      <div class="z-10 text-[2rem] text-white">USMLE</div>
    </div>

    <!-- info -->
    <div class="w-full h-2/3 pt-6 grid grid-rows-2">
      <div class="w-full h-full flex justify-center items-center flex-row">
        <div class="w-[25%] h-full bg-red-200">1</div>
        <div class="w-[75%] h-full bg-yellow-200">2</div>
      </div>
      <div class="bg-blue-200">2</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
p {
  background-image: url();
  background-size: cover;
}
</style>
