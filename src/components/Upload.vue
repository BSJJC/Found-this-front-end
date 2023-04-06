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
  <div class="w-full h-full bg-red-300 overflow-hidden">
    <el-upload action="#" list-type="picture-card" :auto-upload="false">
      <elPlushVue color="black" class="w-[50px]"></elPlushVue>

      <template #file="{ file }">
        <div>
          <img class="el-upload-list__item-thumbnail" :src="file.url" alt="" />
          <span class="el-upload-list__item-actions">
            <elZoomInVue
              class="w-[50px] m-2"
              color="white"
              @click="handlePictureCardPreview(file)"
            ></elZoomInVue>

            <elDeleteVue
              class="w-[50px] m-2"
              color="white"
              @click="handleRemove(file)"
            ></elDeleteVue>
          </span>
        </div>
      </template>
    </el-upload>

    <!-- <el-dialog v-model="dialogVisible"> 123 </el-dialog> -->
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
</style>
