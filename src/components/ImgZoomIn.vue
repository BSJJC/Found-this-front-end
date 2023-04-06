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
    class="z-[2002] fixed top-0 left-0 w-screen h-screen bg-[#7e56da7a]"
    @click="hidePreview"
  >
    <el-scrollbar>
      <!-- main img preview -->
      <div class="w-full h-full flex justify-center items-center p-10">
        <img
          :src="props.imgUrl"
          alt="the image that user wants to preview"
          class="rounded-3xl shadow-xl shadow-[#7E56DA] w-1/2"
        />
      </div>
    </el-scrollbar>
  </div>
</template>

<style lang="scss" scoped></style>
