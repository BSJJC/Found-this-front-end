<script lang="ts" setup>
import { ref } from "vue";
import {
  elDelete,
  elDownload,
  elPlus,
  elZoomIn,
  elDeleteVue,
} from "@/imgs/icons";
import { ElUpload } from "element-plus";

import type { UploadFile } from "element-plus";

const dialogImageUrl = ref("");
const dialogVisible = ref(false);
const disabled = ref(false);

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
      <img :src="elPlus" alt="" />

      <template #file="{ file }">
        <div>
          <img class="el-upload-list__item-thumbnail" :src="file.url" alt="" />
          <span class="el-upload-list__item-actions">
            <img
              :src="elZoomIn"
              class="w-[50px]"
              fill="white"
              @click="handlePictureCardPreview(file)"
            />

            <elDeleteVue color="white"> </elDeleteVue>
          </span>
        </div>
      </template>
    </el-upload>
  </div>
</template>

<style lang="scss" scoped>
.op {
  color: white;
}
</style>
