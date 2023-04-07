<script lang="ts" setup>
import { ref, defineAsyncComponent } from "vue";
import Editor from "@tinymce/tinymce-vue";

const editorData = ref(`123`);

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
    <header class="h-[10%] w-full flex justify-between items-center">
      <div class="h-full w-1/2 flex justify-start items-center text-3xl">
        <logo class="text-5xl"></logo>
      </div>

      <div class="h-full w-[300px] flex justify-end items-center px-3">
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
        v-model="editorData"
        class="h-full transition duration-300 ease absolute z-10"
        api-key="tup1hjjciyq9wo6uus67ng0eemkjua5dprzb71dqrucrqh8y"
        :init="{
          plugins:
            'preview importcss searchreplace autolink autosave  directionality code visualblocks visualchars fullscreen image link media template codesample table charmap pagebreak nonbreaking anchor insertdatetime advlist lists wordcount help charmap quickbars emoticons',
          toolbar:
            'undo redo | bold italic underline strikethrough | fontfamily fontsize blocks | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview  print | insertfile image media template link anchor codesample | ltr rtl',
          toolbar_sticky: true,
          contextmenu: 'link image table',
          language: '',
          resize: false,
          editimage_cors_hosts: ['picsum.photos'],
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
