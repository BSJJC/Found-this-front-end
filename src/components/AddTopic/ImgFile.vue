<script lang="ts" setup>
import { elDeleteVue, elZoomInVue } from "@/imgs/icons";

type fileType = {
  binaryString: string;
  uuid: string;
};

interface config {
  file: fileType;
}

const props = defineProps<config>();

/**
 *  delay load image preview
 * @param uuid the id of the img tag
 */
function delayLoadImg(uuid: string): void {
  const el = document.getElementById(uuid);
  const src = el!.getAttribute("src");
  el!.setAttribute("src", "");

  setTimeout(() => {
    el!.setAttribute("src", src!);
  }, 500);

  setTimeout(() => {
    el!.style.left = "0px";
    el!.style.opacity = "1";
  }, 700);
}
</script>

<template>
  <div class="w-full h-full relative flex justify-center items-center">
    <!-- control are -->
    <div
      class="z-20 w-full h-full bg-[#00000078] grid grid-cols-2 opacity-0 transition duration2-00 ease hover:opacity-100"
    >
      <!-- hover mask -->
      <div class="col-span-1 flex justify-center items-center">
        <elZoomInVue
          color="white"
          class="w-full m-2 hover:cursor-pointer"
        ></elZoomInVue>
      </div>
      <div class="col-span-1 flex justify-center items-center">
        <elDeleteVue
          color="white"
          class="w-full m-2 hover:cursor-pointer"
        ></elDeleteVue>
      </div>
    </div>

    <!-- image -->
    <div class="w-full h-full absolute">
      <div class="absolute w-full h-full z-0" v-loading="true"></div>

      <transition name="opacity-fade">
        <img
          :src="props.file.binaryString"
          :id="props.file.uuid"
          alt="selected img preview"
          class="absolute -left-[100%] opacity-0 transition-all duration-700 ease z-10"
          @load.once="delayLoadImg(props.file.uuid)"
        />
      </transition>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
