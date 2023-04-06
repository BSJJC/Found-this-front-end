<script lang="ts" setup>
import { ref } from "vue";
import { elPlushVue, elDeleteVue, elZoomInVue } from "@/imgs/icons";
import type { UploadFile } from "element-plus";

import ImgZoomIn from "@/components/ImgZoomIn.vue";

const dialogImageUrl = ref("");
const dialogVisible = ref(false);

const handleRemove = (file: UploadFile) => {
  console.log(file);
};

const handlePictureCardPreview = (file: UploadFile) => {
  dialogImageUrl.value = file.url!;
  dialogVisible.value = true;
};

function hidePreview() {
  dialogVisible.value = false;
}
</script>

<template>
  <div class="w-full h-full flex justify-start items-center p-2">
    <el-upload
      action="#"
      list-type="picture-card"
      :auto-upload="false"
      class="h-[80px]"
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
              class="m-1 hover:cursor-pointer"
              color="white"
              @click="handlePictureCardPreview(file)"
            ></elZoomInVue>

            <elDeleteVue
              class="m-1 hover:cursor-pointer"
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
