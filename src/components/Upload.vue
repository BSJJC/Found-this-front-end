<script lang="ts" setup>
import { ref } from "vue";

import { elPlushVue, elDeleteVue, elZoomInVue } from "@/imgs/icons";
import { ElMessage } from "element-plus";
import ImgZoomIn from "@/components/ImgZoomIn.vue";
import generateUUID from "@/utils/uuid";

const fileUpload = ref(null);
const fileInput = ref(null);

const fileList = ref<fileConfig[]>([]);

const dialogImageUrl = ref("");
const dialogVisible = ref(false);

interface fileConfig {
  uuid: string;
  extends: string;
  binaryString: string;
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

  // get UUID
  const uuid = generateUUID();

  // get extension
  const fileNameParts = file.name.split(".");
  const extension = fileNameParts[fileNameParts.length - 1];

  // get data
  const reader = new FileReader();
  reader.readAsDataURL(file);

  reader.onload = () => {
    const binaryString = reader.result as string;

    fileList.value.push({
      uuid: uuid,
      extends: extension,
      binaryString: binaryString,
    });
  };
}
</script>

<template>
  <div class="w-full h-full flex justify-start items-center p-2">
    <div ref="fileUpload" class="h-full flex bg-red-300">
      <div v-for="(i, index) in fileList" :key="index" class="h-full">
        <img :src="i.binaryString" />
      </div>

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
