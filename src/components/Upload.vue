<script lang="ts" setup>
import { ref } from "vue";
import { elDelete, elDownload, elPlus, elZoomIn } from "@/imgs/icons";
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

            <svg
              viewBox="0 0 1024 1024"
              xmlns="http://www.w3.org/2000/svg"
              data-v-ea893728=""
            >
              <path
                fill="currentColor"
                d="M160 256H96a32 32 0 0 1 0-64h256V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64h-64v672a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V256zm448-64v-64H416v64h192zM224 896h576V256H224v640zm192-128a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32zm192 0a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32z"
              ></path>
            </svg>
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
