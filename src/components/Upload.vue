<script lang="ts" setup>
import { ref } from "vue";
import {
  elDeleteVue,
  elDownloadVue,
  elPlushVue,
  elZoomInVue,
} from "@/imgs/icons";
import type { UploadFile } from "element-plus";

const dialogImageUrl = ref("");
const dialogVisible = ref(false);

const handleRemove = (file: UploadFile) => {
  console.log(file);
};

const handlePictureCardPreview = (file: UploadFile) => {
  dialogImageUrl.value = file.url!;
  dialogVisible.value = true;
};
</script>

<template>
  <div class="w-full h-full bg-red-300">
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

    <el-dialog v-model="dialogVisible">
      <img w-full :src="dialogImageUrl" alt="Preview Image" />
    </el-dialog>
  </div>
</template>

<style lang="scss" scoped></style>
