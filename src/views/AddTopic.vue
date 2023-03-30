<script lang="ts" setup>
import Editor from "@tinymce/tinymce-vue";
</script>

<template>
  <!--mask  -->
  <div
    class="w-screen h-screen fixed flex justify-center items-center bg-[#7E56DA] z-[999] text-white text-[5rem] mask-out"
  >
    ADD NEW TOPIC
  </div>

  <div
    class="bg-red-200 w-screen h-screen flex justify-center items-center flex-col p-10"
  >
    <main class="w-full h-2/3">
      <Editor
        class="h-full"
        api-key="tup1hjjciyq9wo6uus67ng0eemkjua5dprzb71dqrucrqh8y"
        :init="{
          plugins: 'lists link image table code help wordcount',
          language: 'zh_CN',
        }"
      />
    </main>

    <footer class="w-full h-1/3 bg-blue-200">123</footer>
  </div>
</template>

<style lang="scss">
.mask-out {
  animation: mask-out 0.5s ease-in-out forwards;
}
@keyframes mask-out {
  99% {
    opacity: 0;
    display: block;
  }

  100% {
    opacity: 0;
    display: none;
    z-index: -1;
  }
}
</style>
