<script lang="ts" setup>
import { ref, Ref, defineAsyncComponent } from "vue";
import { useRouter } from "vue-router";
import { storeToRefs } from "pinia";
import { useNewTopic } from "@/stores/index";

import Editor from "@tinymce/tinymce-vue";
import { ElMessage } from "element-plus";
import disableInputSpace from "@/utils/disableInputSpace";

import uploadNewTopicInfo from "@/api/topic/uploadNewTopicInfo";
import uploadNewTopicAppendix from "@/api/topic/uploadNewTopicAppendix";
import { AxiosResponse } from "axios";

const store = useNewTopic();
const { topicName, editorText, fileList, allAppendixs } = storeToRefs(store);

const allObjectIDs: Ref<string[]> = ref([]);
const allFIleUploaded: Ref<boolean> = ref(true);

const router = useRouter();

const Logo = defineAsyncComponent(() => import("@/components/logo.vue"));
const Upload = defineAsyncComponent(
  () => import("@/components/AddTopic/Upload.vue")
);

/**
 * Send request, upload new topic info
 * if any file fail to upload, this method will not be run
 */
async function topicInfo(): Promise<void> {
  if (!allFIleUploaded.value) {
    return;
  }

  const userInfo = JSON.parse(sessionStorage.getItem("user") as string);

  const newTopicInfo = {
    founder: userInfo.email,
    title: topicName.value,
    text: editorText.value,
    appendixIDs: [...allObjectIDs.value],
  };

  await uploadNewTopicInfo(newTopicInfo);

  topicName.value = "";
  editorText.value = "";

  ElMessage({
    type: "success",
    message: "The new topic is created!",
  });
}

/**
 * Send request, upload new topic appendix
 */
async function topicAppendix(): Promise<void> {
  allFIleUploaded.value = true;

  const promises: Promise<AxiosResponse<any>>[] = [];

  try {
    allAppendixs.value.forEach((appendix) => {
      promises.push(uploadNewTopicAppendix(appendix));
    });

    const results = await Promise.allSettled(promises);

    topicAppendixErrorHandler(results);
  } catch (error) {
    console.log(error);
  }
}

/**
 * handle error if any file is fail to upload
 * @param results the Pormise array of all requests
 */
function topicAppendixErrorHandler(
  results: PromiseSettledResult<AxiosResponse<any, any>>[]
): void {
  const uploadedFIleIndexs: number[] = [];

  // error handle
  results.forEach((result, index) => {
    if (result.status === "rejected") {
      console.error(`Error uploading appendix ${index}: ${result.reason}`);

      allFIleUploaded.value = false;
    } else {
      const response = result.value;
      allObjectIDs.value.push(response.data);

      uploadedFIleIndexs.push(index);
    }
  });

  // delete the uploaded file from fileList and allAppendixs
  for (let i = uploadedFIleIndexs.length - 1; i >= 0; i--) {
    fileList.value.splice(uploadedFIleIndexs[i], 1);
    allAppendixs.value.splice(uploadedFIleIndexs[i], 1);
  }

  // show error message if any file failed to upload
  if (!allFIleUploaded.value) {
    ElMessage({
      type: "error",
      message: `Some appendix failed to upload, please click "SUBMIT" again to try uploading`,
    });
  }
}

/**
 * try submit new topic
 */
async function submitTopic(): Promise<void> {
  if (topicName.value.length === 0) {
    ElMessage.error("topic name is necessary");
    return;
  }

  if (editorText.value.length === 0) {
    ElMessage.error("text is necessary");
    return;
  }

  await topicAppendix();
  await topicInfo();

  setTimeout(() => {
    router.push("/");
  }, 2000);
}
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
        <logo class="text-5xl" :enable-go-to-home-page="true"></logo>
      </div>

      <div
        class="col-span-1 flex justify-center items-center text-4xl text-[#7E56DA]"
      >
        <div class="font-bold drop-shadow-lg">topic name:</div>
        <input
          v-model="topicName"
          class="h-[40px] w-[400px] ml-2 outline-none border-[1px] border-[#7E56DA] rounded-full text-2xl indent-4 shadow-lg translate-y-1"
          @input="topicName = disableInputSpace(topicName)"
        />
      </div>

      <div class="h-full px-3 col-span-1 flex justify-end items-center">
        <button
          class="bg-[#7E56DA] text-white px-8 py-3 rounded-lg text-xl shadow-md shadow-[#7E56DA] transition duration-300 ease hover:-translate-y-1"
          @click="submitTopic"
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
