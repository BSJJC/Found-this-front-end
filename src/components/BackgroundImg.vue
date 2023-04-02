<script lang="ts" setup>
import { ref, Ref } from "vue";

interface background {
  src: string;
  alt: string;
}

const props = defineProps<background>();
const loading: Ref<boolean> = ref(true);
const translateY: Ref<number> = ref(100);

function backgroundLoaded() {
  loading.value = false;
  translateY.value = 0;
}
</script>

<template>
  <div class="w-full h-full relative overflow-hidden rounded-xl">
    <!-- loading placeholder -->

    <transition name="opacity-fade">
      <div
        v-if="loading"
        class="absolute w-full h-full transition duration-300 ease bg-[#7E56DA] z-0"
        v-loading="loading"
      ></div>
    </transition>

    <!-- actual background -->
    <img
      :src="props.src"
      :alt="props.alt"
      @load="backgroundLoaded"
      class="absolute w-full h-full transition duration-300 ease z-10"
      :style="{ transform: `translateY(${translateY}%)` }"
    />
  </div>
</template>

<style lang="scss" scoped>
@use "@/scss/animations.scss";
</style>
