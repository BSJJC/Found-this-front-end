<script lang="ts" setup>
import { ref, Ref } from "vue";

interface avater {
  src: string;
  alt: string;
  loadingText: string;
}

const props = defineProps<avater>();

const loading: Ref<boolean> = ref(true);
const translateY: Ref<number> = ref(100);

function imgLoaded() {
  translateY.value = 0;
  loading.value = false;
}
</script>

<template>
  <div class="w-[50px] h-[50px] relative rounded-full overflow-hidden z-0">
    <!-- loading text -->
    <transition name="opacity-fade">
      <div
        v-if="loading"
        v-loading="loading"
        class="absolute w-full h-full bg-[#7e56da] text-base text-white flex justify-center items-center"
      >
        {{ props.loadingText }}
      </div>
    </transition>

    <!-- image -->
    <img
      class="absolute w-full h-full transition duration-300 ease"
      :style="{ transform: `translateY(${translateY}%)` }"
      :src="props.src"
      :alt="props.alt"
      @load="imgLoaded"
    />
  </div>
</template>

<style lang="scss" scoped>
@use "@/scss/animations.scss";
</style>
