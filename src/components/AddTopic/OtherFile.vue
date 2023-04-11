<script lang="ts" setup>
import { useNewTopic } from "@/stores/index";
import { storeToRefs } from "pinia";

import { elDeleteVue } from "@/imgs/icons";

type fileType = {
  name: string;
  extends: string;
  uuid: string;
};

interface config {
  file: fileType;
}

const props = defineProps<config>();

const store = useNewTopic();
const { fileList } = storeToRefs(store);

/**
 * delete this non-image file
 */
function deleteFile(uuid: string) {
  fileList.value.forEach((file, index) => {
    if (file.uuid === uuid) {
      fileList.value.splice(index, 1);
      return;
    }
  });
}
</script>

<template>
  <div class="w-full h-full relative">
    <!-- file full name & file control -->
    <div
      class="w-full h-full bg-[#00000078] flex justify-center items-center text-center absolute z-20 opacity-0 transition duration-200 ease hover:opacity-100"
    >
      <div class="w-full h-full absolute flex justify-center items-center">
        <elDeleteVue
          color="white"
          class="w-1/3 hover:cursor-pointer"
          @click="deleteFile(props.file.uuid)"
        ></elDeleteVue>
      </div>
    </div>

    <!-- file info overview -->
    <div class="text-white text-lg bg-[#7e56da94] w-full h-full absolute">
      <div class="w-full h-1/2 text-center flex justify-center items-center">
        {{ props.file.name.substring(0, 5) }}
      </div>
      <div class="w-full h-1/2 text-center flex justify-center items-center">
        {{ props.file.extends }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
