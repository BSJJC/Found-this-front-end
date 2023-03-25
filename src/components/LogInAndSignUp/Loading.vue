<script lang="ts" setup>
import { ref, defineAsyncComponent } from "vue";
import { useLoading } from "@/stores/index";
import { storeToRefs } from "pinia";

const LottieAnimation = defineAsyncComponent(
  () => import("@/components/Effects/LottieAnimation.vue")
);

const SquareBackground = defineAsyncComponent(
  () => import("@/components/Effects/SquareBackground.vue")
);

const store = useLoading();
const {
  animations,
  loadingUrl,
  successUrl,
  failUrl,
  loadingSentence,
  successSentence,
  failSentence,
} = storeToRefs(store);

const state = ref("failed");
</script>

<template>
  <div id="container" class="w-[80%] h-[80%] overflow-hidden">
    <div
      class="w-full h-full rounded-xl translate-y-full grid grid-rows-2 overflow-hidden"
      :class="animations"
    >
      <div class="w-full bg-white row-span-1 flex justify-center items-center">
        <transition name="fade" mode="out-in">
          <lottie-animation
            v-if="state === 'loading'"
            :animationUrl="loadingUrl"
          ></lottie-animation>

          <lottie-animation
            v-else-if="state === 'successe'"
            class="h-1/2"
            :animationUrl="successUrl"
          ></lottie-animation>

          <lottie-animation
            v-else-if="state === 'failed'"
            class="h-1/2"
            :animationUrl="failUrl"
          ></lottie-animation>
        </transition>
      </div>

      <div
        class="row-span-1 w-full h-full flex justify-center items-center text-[2.5rem] bg-[#7e56da] text-white"
      >
        <transition name="fade" mode="out-in">
          <div v-if="state === 'loading'">
            <div
              v-for="(i, index) in loadingSentence"
              :key="index"
              class="loading w-[20px] text-center ml-[10px] shadow-lg inline-block"
              :style="{ animationDelay: `${index * 0.1}s` }"
            >
              {{ i }}
            </div>
          </div>

          <div v-else-if="state === 'successe'">
            <div
              v-for="(i, index) in successSentence"
              :key="index"
              class="success w-[20px] text-center ml-[10px] shadow-lg inline-block"
              :style="{ animationDelay: `${index * 0.1}s` }"
            >
              {{ i }}
            </div>
          </div>

          <div v-else-if="state === 'failed'">
            <div
              v-for="(i, index) in failSentence"
              :key="index"
              class="failed w-[20px] text-center ml-[10px] shadow-lg inline-block"
              :style="{ animationDelay: `0.3s` }"
            >
              {{ i }}
            </div>
          </div>
        </transition>
      </div>

      <square-background class="absolute w-full h-full"></square-background>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#container {
  position: absolute;
  z-index: 20;
}

.in {
  animation: in 0.3s ease-in-out forwards;
}
@keyframes in {
  to {
    transform: translateY(0px);
  }
}

.out {
  transform: translateY(0);
  animation: out 0.3s ease-in-out forwards;
}
@keyframes out {
  to {
    transform: translateY(-100%);
  }
}

.loading {
  animation: loading 1s ease-in-out infinite;
}

@keyframes loading {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
}

.success {
  animation: success 0.3s ease-in-out forwards;
}

@keyframes success {
  to {
    transform: translateY(-10px);
  }
}

.failed {
  animation: failed 1.2s ease-in-out infinite;
}

@keyframes failed {
  0% {
    transform: translateY(0px);
  }

  80% {
    transform: translateY(-20px);
  }

  100% {
    transform: translateY(-0px);
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>
