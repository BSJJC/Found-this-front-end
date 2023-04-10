<script lang="ts" setup>
import { ref, onMounted } from "vue";

type positionType = {
  top: number;
  left: number;
};

interface config {
  binaryString: string;
  startPostions: positionType;
}

const props = defineProps<config>();

const state = ref({
  top: `${props.startPostions.top}px`,
  left: `${props.startPostions.left}px`,
  width: "80px",
});

const emits = defineEmits(["hidePreview"]);

function zoomIn() {
  state.value.top = "-75px";
  state.value.left = "25vw";
  state.value.width = "50vw";

  setTimeout(() => {
    state.value.top = "0px";
  }, 400);
}

function zoomOut() {
  state.value.top = `${props.startPostions.top}px`;
  state.value.left = `${props.startPostions.left}px`;
  state.value.width = "80px";
}

function hidePreview() {
  zoomOut();

  setTimeout(() => {
    emits("hidePreview");
  }, 500);
}

onMounted(() => {
  setTimeout(() => {
    zoomIn();
  }, 5);
});
</script>

<template>
  <div
    class="w-screen h-screen bg-[#00000080] absolute top-0 z-[999] flex justify-center items-start"
  >
    <el-scrollbar>
      <div class="w-screen h-full relative" @click="hidePreview">
        <img
          :src="props.binaryString"
          alt="the preview of the selected image"
          class="rounded-lg absolute transition-all duration-500 ease"
          :style="{
            top: `${state.top}`,
            left: `${state.left}`,
            width: `${state.width}`,
          }"
        />
      </div>
    </el-scrollbar>
  </div>
</template>

<style lang="scss" scoped>
* {
  user-select: none;
}

:deep(.el-scrollbar__bar) {
  opacity: 0 !important;
}
</style>
