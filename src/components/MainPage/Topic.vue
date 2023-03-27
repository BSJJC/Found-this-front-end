<script lang="ts" setup>
const url = `https://random.imagecdn.app/v1/image?m=${Math.random()}`;
</script>

<template>
  <div class="w-[90%] min-h-[200px] bg-red-300">
    <img :src="url" />
  </div>
</template>

<style lang="scss" scoped>
img {
  width: 50%;
}
</style>
