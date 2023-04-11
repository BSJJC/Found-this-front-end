<script lang="ts" setup>
import { defineAsyncComponent } from "vue";
import { useNewTopic } from "@/stores/index";
import { storeToRefs } from "pinia";

import Editor from "@tinymce/tinymce-vue";

const store = useNewTopic();
const { topicName, editorText } = storeToRefs(store);

const Logo = defineAsyncComponent(() => import("@/components/logo.vue"));
const Upload = defineAsyncComponent(
  () => import("@/components/AddTopic/Upload.vue")
);
</script>

<template>
  <!--mask  -->
  <div
    class="w-screen h-screen fixed flex justify-center items-center bg-[#7E56DA] z-[999] text-white text-[5rem] mask-out"
  >
    ADD NEW TOPIC
  </div>

  <!-- main container -->
  <div
    class="w-screen h-screen flex justify-around items-center flex-col px-10"
  >
    <!-- header -->
    <header class="h-[10%] w-full grid grid-cols-3">
      <div class="col-span-1 h-full flex justify-start items-center">
        <logo class="text-5xl"></logo>
      </div>

      <div
        class="col-span-1 flex justify-center items-center text-4xl text-[#7E56DA]"
      >
        <div class="font-bold drop-shadow-lg">topic name:</div>
        <input
          v-model="topicName"
          class="h-[40px] w-[400px] ml-2 outline-none border-[1px] border-[#7E56DA] rounded-full text-2xl indent-4 shadow-lg translate-y-1"
        />
      </div>

      <div class="h-full px-3 col-span-1 flex justify-end items-center">
        <button
          class="bg-[#7E56DA] text-white px-8 py-3 rounded-lg text-xl shadow-md shadow-[#7E56DA] transition duration-300 ease hover:-translate-y-1"
        >
          SUBMIT
        </button>
      </div>
    </header>

    <!-- main -->
    <main
      class="w-full h-[75%] shadow-lg shadow-[#7E56DA] rounded-lg overflow-hidden relative"
      :v-loading="true"
    >
      <Editor
        v-model="editorText"
        class="h-full transition duration-300 ease absolute z-10"
        api-key="tup1hjjciyq9wo6uus67ng0eemkjua5dprzb71dqrucrqh8y"
        :init="{
          plugins:
            'preview importcss searchreplace autolink autosave  directionality code visualblocks visualchars fullscreen link media template codesample table charmap pagebreak nonbreaking anchor insertdatetime advlist lists wordcount help charmap quickbars emoticons',
          toolbar:
            'undo redo | bold italic underline strikethrough | fontfamily fontsize blocks | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview  print | link anchor codesample | ltr rtl',
          toolbar_sticky: true,
          contextmenu: 'link table',
          language: '',
          resize: false,
          skin: 'oxide',
          content_css: 'light',
        }"
      />

      <!-- loading placeholder -->
      <div
        class="w-full h-full flex justify-center items-center text-5xl text-white bg-[#7e56da64] absolute"
      >
        Loading...
      </div>
    </main>

    <!-- footer -->
    <footer class="w-full h-[10%] shadow-lg shadow-[#7E56DA] rounded-lg">
      <Upload></Upload>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
* {
  user-select: none;
}

.mask-out {
  animation: mask-out 0.3s ease-in-out forwards;
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
