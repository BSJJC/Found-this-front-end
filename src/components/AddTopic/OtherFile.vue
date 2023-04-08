<script lang="ts" setup>
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
