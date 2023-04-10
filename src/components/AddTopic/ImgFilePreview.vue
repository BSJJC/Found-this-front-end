<script lang="ts" setup>
type positionType = {
  top: number;
  left: number;
  width: number;
  height: number;
};

interface config {
  binaryString: string;
  startPostions: positionType;
}

const props = defineProps<config>();

const emits = defineEmits(["hidePreview"]);

function hidePreview() {
  emits("hidePreview");
}
</script>

<template>
  <div
    class="w-screen h-screen bg-[#0101016b] absolute top-0 z-[500]"
    @click.self="hidePreview"
  >
    {{ props.startPostions }}
    <img
      :src="props.binaryString"
      alt="selected image file preview"
      class="absolute"
      :style="{
        top: `${props.startPostions.top}px`,
        left: `${props.startPostions.left}px`,
        width: `${props.startPostions.width}px`,
        height: `${props.startPostions.height}px`,
      }"
    />
  </div>
</template>

<style lang="scss" scoped></style>
