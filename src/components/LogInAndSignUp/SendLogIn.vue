<script lang="ts" setup>
import { ref, defineAsyncComponent } from "vue";
import { sendLogIn } from "@/stores/index";
import { storeToRefs } from "pinia";

const LottieAnimation = defineAsyncComponent(
  () => import("@/components/Effects/LottieAnimation.vue")
);

const SquareBackground = defineAsyncComponent(
  () => import("@/components/Effects/SquareBackground.vue")
);

const store = sendLogIn();
const { animations, sendingUrl, successUrl, failUrl } = storeToRefs(store);

const sentence = ref("sending......");

const test = ref(true);

setInterval(() => {
  test.value = !test.value;
}, 2000);
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
            v-if="test"
            :animationUrl="sendingUrl"
          ></lottie-animation>

          <!-- <lottie-animation
            v-else
            class="h-1/2"
            :animationUrl="successUrl"
          ></lottie-animation> -->

          <lottie-animation
            v-else
            class="h-1/2"
            :animationUrl="failUrl"
          ></lottie-animation>
        </transition>
      </div>

      <div
        class="row-span-1 w-full h-full flex justify-center items-center text-[2.5rem] bg-[#7e56da] text-white"
      >
        <div
          v-for="(i, index) in sentence"
          :key="index"
          class="jump w-[20px] text-center ml-[10px] shadow-lg"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          {{ i }}
        </div>
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

.jump {
  animation: jump 1s ease-in-out infinite;
}

@keyframes jump {
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
