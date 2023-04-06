<script lang="ts" setup>
interface config {
  imgUrl: string;
}

const props = defineProps<config>();
const emits = defineEmits(["hidePreview"]);

function hidePreview() {
  emits("hidePreview");
}
</script>

<template>
  <!-- mask -->
  <div
    class="z-[2002] fixed top-0 left-0 w-screen h-screen bg-[#7e56da4b]"
    @click="hidePreview"
  >
    <el-scrollbar>
      <!-- main img preview -->
      <div class="flex justify-start items-center flex-col">
        <img :src="props.imgUrl" alt="the image that user wants to preview" />
      </div>
    </el-scrollbar>
  </div>
</template>

<style lang="scss" scoped></style>
