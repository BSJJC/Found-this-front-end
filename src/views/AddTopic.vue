<script lang="ts" setup>
import { ref } from "vue";
import Editor from "@tinymce/tinymce-vue";

const editorData = ref(`123`);
</script>

<template>
  <!--mask  -->
  <div
    class="w-screen h-screen fixed flex justify-center items-center bg-[#7E56DA] z-[999] text-white text-[5rem] mask-out"
  >
    ADD NEW TOPIC
  </div>

  <!-- main container -->
  <div class="w-screen h-screen flex justify-center items-center flex-col p-10">
    <!-- main -->
    <main class="w-full h-[80%] shadow-md shadow-[#d5d5d5]" :v-loading="true">
      <Editor
        v-model="editorData"
        class="h-full"
        api-key="tup1hjjciyq9wo6uus67ng0eemkjua5dprzb71dqrucrqh8y"
        :init="{
          plugins:
            'preview importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap pagebreak nonbreaking anchor insertdatetime advlist lists wordcount help charmap quickbars emoticons',
          toolbar:
            'undo redo | bold italic underline strikethrough | fontfamily fontsize blocks | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl',
          toolbar_sticky: true,
          contextmenu: 'link image table',
          language: '',
          resize: false,
          editimage_cors_hosts: ['picsum.photos'],
          skin: 'oxide',
          content_css: 'light',
        }"
      />
    </main>

    <!-- footer -->
    <footer class="w-full h-[20%] bg-blue-200">123</footer>
  </div>
</template>

<style lang="scss">
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
