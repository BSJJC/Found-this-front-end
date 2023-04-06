<script lang="ts" setup>
import { ref } from "vue";
import type { UploadFile } from "element-plus";

import { elPlushVue, elDeleteVue, elZoomInVue } from "@/imgs/icons";
import ImgZoomIn from "@/components/ImgZoomIn.vue";
import type { UploadInstance } from "element-plus";
import type { UploadProps, UploadUserFile } from "element-plus";

const fileList = ref<UploadUserFile[]>([]);

const uploadRef = ref<UploadInstance>();
const dialogImageUrl = ref("");
const dialogVisible = ref(false);

/**
 * check if the selected file already exists
 * @param file the file that needs to be uploaded
 */
function fileCheck(file: UploadFile): void {
  const isExist = fileList.value.some(
    (uploadFile) => file.name == uploadFile.name
  );

  if (isExist) {
    console.log("same file already exists");
    fileList.value = fileList.value.splice(0, fileList.value.length);
  } else {
    fileList.value.push(file);
  }
}

/**
 *  uncheck file
 * @param file the file that needs to be uncheck
 */
function handleRemove(file: UploadFile): void {}

/**
 *  show the preview of image file
 * @param file the image file that should be zoom in
 */
function handlePictureCardPreview(file: UploadFile): void {
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
</script>

<template>
  <div class="w-full h-full flex justify-start items-center p-2">
    <el-button @click="submitUpload">123</el-button>

    <el-upload
      ref="uploadRef"
      v-model:file-list="fileList"
      action="#"
      list-type="picture-card"
      :auto-upload="false"
      class="h-[80px]"
      :on-change="fileCheck"
    >
      <elPlushVue color="white" class="w-[50px]"></elPlushVue>

      <template #file="{ file }">
        <div>
          <!-- img  -->
          <img
            class="el-upload-list__item-thumbnail"
            :src="file.url"
            alt="the selected image"
          />

          <!-- img control area -->
          <span class="el-upload-list__item-actions">
            <elZoomInVue
              class="m-2 hover:cursor-pointer"
              color="white"
              @click="handlePictureCardPreview(file)"
            ></elZoomInVue>

            <elDeleteVue
              class="m-2 hover:cursor-pointer"
              color="white"
              @click="handleRemove(file)"
            ></elDeleteVue>
          </span>
        </div>
      </template>
    </el-upload>

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

:deep(.el-upload-list) {
  height: 80px !important;

  * {
    :hover {
      cursor: pointer !important;
    }
  }
}

:deep(.el-upload),
:deep(.el-upload-list__item) {
  all: unset;
  position: relative !important;
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  background: #7e56da88 !important;
  width: 80px !important;
  height: 80px !important;
  border-radius: 0.5rem !important;
  overflow: hidden !important;
  margin-right: 10px !important;
}
</style>
