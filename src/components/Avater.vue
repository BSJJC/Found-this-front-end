<script lang="ts" setup>
import { ref } from "vue";

const props = defineProps({
  src: {
    type: String,
  },
  alt: {
    type: String,
  },
  loadingText: {
    type: String,
  },
});

const loading = ref(true);
const translateY = ref(100);

function imgLoad() {
  translateY.value = 0;
  loading.value = false;
}
</script>

<template>
  <div class="w-[50px] h-[50px] relative rounded-full overflow-hidden z-0">
    <!-- loading text -->
    <div
      v-loading="loading"
      class="absolute w-full h-full bg-[#7e56da] text-base flex justify-center items-center"
    >
      {{ props.loadingText }}
    </div>

    <!-- image -->
    <img
      class="absolute w-full h-full bg-purple-200 translate-y-[100%] transition duration-300"
      :style="{ transform: `translateY(${translateY}%)` }"
      :src="props.src"
      :alt="props.alt"
      @load="imgLoad"
    />
  </div>
</template>
