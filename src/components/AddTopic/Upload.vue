<script lang="ts" setup>
import { ref, defineAsyncComponent } from "vue";
import { useNewTopic } from "@/stores/index";
import { storeToRefs } from "pinia";

import { elPlushVue } from "@/imgs/icons";
import generateUUID from "@/utils/uuid";

const fileUpload = ref(null);
const fileInput = ref(null);

const store = useNewTopic();
const { fileList, allAppendixs } = storeToRefs(store);

const ImgFile = defineAsyncComponent(() => import("./ImgFile.vue"));
const OtherFile = defineAsyncComponent(() => import("./OtherFile.vue"));

/**
 * get files that needs to be uploaded
 */
function getFiles() {
  // @ts-ignore
  for (let i = 0; i < fileInput.value.files.length; i++) {
    // @ts-ignore
    const file = fileInput.value.files[i];

    // get UUID
    const uuid = generateUUID();

    // get file extension
    const fileNameParts = file.name.split(".");
    const extension = fileNameParts[fileNameParts.length - 1];

    // get file name
    const fileName = fileNameParts[0];

    // add file to allAppendixs
    const formData = new FormData();
    formData.append("topicAppendix", file);
    allAppendixs.value.push(formData);

    // just for show the files
    // add to file list,
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      const binaryString = reader.result as string;

      fileList.value.push({
        name: fileName,
        uuid: uuid,
        extends: extension,
        binaryString: binaryString,
      });
    };
  }
}
</script>

<template>
  <div class="w-full h-full flex justify-start items-center p-2">
    <el-scrollbar>
      <div ref="fileUpload" class="flex flex-wrap">
        <!-- selected images -->
        <transition-group name="width-grown">
          <div
            v-for="(file, index) in fileList"
            :key="fileList[index].uuid"
            class="w-[80px] h-[80px] mr-4 mb-4 flex justify-center items-center overflow-hidden rounded-lg bg-gray-300"
          >
            <img-file
              v-if="file.extends === 'jpg' || file.extends === 'png'"
              :file="file"
            ></img-file>

            <other-file v-else :file="file"></other-file>
          </div>
        </transition-group>

        <!-- select file button -->
        <div
          class="w-[80px] h-[80px] flex justify-center items-center bg-[#7E56DA] rounded-lg hover:cursor-pointer"
          @click="
            () => {
              //@ts-ignore
              fileInput.click();
            }
          "
        >
          <elPlushVue color="white" class="w-1/2"></elPlushVue>
        </div>

        <input
          type="file"
          ref="fileInput"
          style="display: none"
          @input="getFiles"
          multiple
        />
      </div>
    </el-scrollbar>
  </div>
</template>

<style lang="scss" scoped>
@use "@/scss/animations.scss";

* {
  user-select: none;
}
</style>
