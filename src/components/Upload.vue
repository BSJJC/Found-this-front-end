<script lang="ts" setup>
import { ref } from "vue";

import { elPlushVue, elDeleteVue, elZoomInVue } from "@/imgs/icons";
import { ElMessage } from "element-plus";
import ImgZoomIn from "@/components/ImgZoomIn.vue";
import generateUUID from "@/utils/uuid";

const fileUpload = ref(null);
const fileInput = ref(null);

const fileList = ref([]);

const dialogImageUrl = ref("");
const dialogVisible = ref(false);

interface fileConfig {
  uuid: string;
  type: string;
  data: string;
}

/**
 * check if the selected file already exists
 * @param file the file that needs to be uploaded
 */
function fileCheck(file: fileConfig): void {
  const isExist = fileList.value.some(
    (uploadFile) => file.uuid == uploadFile.uuid
  );

  if (isExist) {
    console.log("same file already exists");
    ElMessage.error({
      message: "Same file exits",
    });
    fileList.value.pop();
  } else {
    console.log(file);

    fileList.value.push(file);
  }
}

/**
 *  uncheck file
 * @param file the file that needs to be uncheck
 */
function handleRemove(file: fileConfig): void {
  fileList.value.forEach((_file, index) => {
    if (_file.uuid === file.uuid) {
      fileList.value.splice(index, 1);
    }
  });
}

/**
 *  show the preview of image file
 * @param file the image file that should be zoom in
 */
function handlePictureCardPreview(file: fileConfig): void {
  dialogImageUrl.value = file.url!;
  dialogVisible.value = true;
}

/**
 * hide the preview of selected image file
 */
function hidePreview() {
  dialogVisible.value = false;
}

/**
 *submit all files that selected
 */
function submitUpload(): void {}

function handleFileChange(event: { target: { files: any[] } }) {
  const file = event.target.files[0];
  const fileNameParts = file.name.split(".");
  const extension = fileNameParts[fileNameParts.length - 1];
  console.log("File extension:", extension);
}
</script>

<template>
  <div class="w-full h-full flex justify-start items-center p-2">
    <div
      class="h-full transition duration-300 ease bg-red-300"
      v-for="(file, index) in fileList"
      :key="index"
    >
      {{ file }}
    </div>

    <div ref="fileUpload" class="w-[100px] h-full flex">
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
        @change="handleFileChange"
      />
    </div>

    <!-- image preview -->
    <teleport to="body">
      <transition name="opacity-fade">
        <Img-zoom-in
          v-show="dialogVisible"
          :imgUrl="dialogImageUrl"
          @hidePreview="hidePreview"
        ></Img-zoom-in>
      </transition>
    </teleport>
  </div>
</template>

<style lang="scss" scoped>
@use "@/scss/animations.scss";

.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>
