<script lang="ts" setup>
import { ref, Ref, reactive, defineAsyncComponent } from "vue";
import { useNewTopic } from "@/stores/index";
import { storeToRefs } from "pinia";

import { elDeleteVue, elZoomInVue } from "@/imgs/icons";

type fileType = {
  binaryString: string;
  uuid: string;
};

type config = {
  file: fileType;
};

const props = defineProps<config>();
const ifShowPreview: Ref<boolean> = ref(false);
const loading: Ref<boolean> = ref(true);

const store = useNewTopic();
const { fileList } = storeToRefs(store);

const imgPreview = defineAsyncComponent(() => import("./ImgFilePreview.vue"));
const copyElPostions = reactive({
  top: 0,
  left: 0,
  width: 0,
  height: 0,
});

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

    loading.value = false;
  }, 700);
}

/**
 * show the preview of the selected image file
 */
function showPreview() {
  const el = document.getElementById(props.file.uuid);

  const reactObject = el!.getBoundingClientRect();

  copyElPostions.top = reactObject.top;
  copyElPostions.left = reactObject.left;

  ifShowPreview.value = true;
}

/**
 *  delete image file
 * @param uuid the uuid of the selectedd image file that needs to be deleted
 */
function deleteImg(uuid: string) {
  fileList.value.forEach((file, index) => {
    if (file.uuid === uuid) {
      fileList.value.splice(index, 1);
      return;
    }
  });
}

/**
 * hide the preview of the selected image file
 */
function hidePreview() {
  ifShowPreview.value = false;
}
</script>

<template>
  <transition name="opacity-fade">
    <div
      v-show="!ifShowPreview"
      class="w-full h-full relative flex justify-center items-center"
    >
      <!-- control are -->
      <div
        class="z-20 w-full h-full bg-[#00000078] grid grid-cols-2 opacity-0 transition duration-200 ease hover:opacity-100"
      >
        <div class="col-span-1 flex justify-center items-center">
          <elZoomInVue
            color="white"
            class="w-full m-2 hover:cursor-pointer"
            @click="showPreview"
          ></elZoomInVue>
        </div>

        <div class="col-span-1 flex justify-center items-center">
          <elDeleteVue
            color="white"
            class="w-full m-2 hover:cursor-pointer"
            @click="deleteImg(props.file.uuid)"
          ></elDeleteVue>
        </div>
      </div>

      <!-- image -->
      <div class="w-full h-full absolute">
        <div class="absolute w-full h-full z-0" v-loading="loading"></div>

        <transition name="opacity-fade">
          <img
            :src="props.file.binaryString"
            :id="props.file.uuid"
            alt="selected img preview"
            class="absolute -left-[100%] opacity-0 transition-all duration-700 ease z-10"
            @load.once="delayLoadImg(props.file.uuid)"
          />
        </transition>

        <!-- copy element -->
        <teleport to="body">
          <transition name="opacity-fade">
            <img-preview
              v-if="ifShowPreview"
              :binary-string="props.file.binaryString"
              :start-postions="copyElPostions"
              @hidePreview="hidePreview"
            ></img-preview>
          </transition>
        </teleport>
      </div>
    </div>
  </transition>
</template>

<style lang="scss" scoped>
@use "@/scss/animations.scss";
</style>
