<script lang="ts" setup>
import { defineAsyncComponent } from "vue";
import { useLoading } from "@/stores/index";
import { storeToRefs } from "pinia";

const LottieAnimation = defineAsyncComponent(
  () => import("@/components/Effects/LottieAnimation.vue")
);

const store = useLoading();
const {
  animations,
  status,
  loadingUrl,
  successUrl,
  failUrl,
  loadingSentence,
  successSentence,
  failSentence,
} = storeToRefs(store);

function back() {
  animations.value.back = true;

  setTimeout(() => {
    store.reset();
  }, 300);
}
</script>

<template>
  <div id="container" class="w-[80%] h-[80%] overflow-hidden">
    <div class="w-full h-full rounded-xl translate-y-full grid grid-rows-2 overflow-hidden" :class="animations">
      <!-- lottie animation -->
      <div class="w-full bg-white row-span-1 flex justify-center items-center">
        <transition name="opacity-fade" mode="out-in">
          <lottie-animation v-if="status === 'loading'" :animationUrl="loadingUrl"></lottie-animation>

          <lottie-animation v-else-if="status === 'success'" class="h-1/2" :animationUrl="successUrl"></lottie-animation>

          <lottie-animation v-else-if="status === 'failed'" class="h-1/2" :animationUrl="failUrl"></lottie-animation>
        </transition>
      </div>

      <!-- state info -->
      <div class="row-span-1 w-full h-full flex justify-center items-center text-[2.5rem] bg-[#7e56da] text-white">
        <transition name="opacity-fade" mode="out-in">
          <div v-if="status === 'loading'">
            <div v-for="(i, index) in loadingSentence" :key="index"
              class="loading w-[20px] text-center ml-[10px] shadow-lg inline-block"
              :style="{ animationDelay: `${index * 0.1}s` }">
              {{ i }}
            </div>
          </div>

          <div v-else-if="status === 'success'">
            <div v-for="(i, index) in successSentence" :key="index"
              class="success w-[20px] text-center ml-[10px] shadow-lg inline-block"
              :style="{ animationDelay: `${index * 0.1}s` }">
              {{ i }}
            </div>
          </div>

          <div v-else-if="status === 'failed'" class="h-1/2 flex flex-col justify-around items-center">
            <div>
              <div v-for="(i, index) in failSentence" :key="index"
                class="failed w-[20px] text-center ml-[10px] shadow-lg inline-block" :style="{ animationDelay: `0.3s` }">
                {{ i }}
              </div>
            </div>
            <button @click="back" class="animate-bounce">back</button>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@/scss/animations.scss";

* {
  user-select: none;
}

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

.back {
  transform: translateY(0px);
  animation: back 0.3s ease-in-out forwards;
}

@keyframes back {
  to {
    transform: translateY(100%);
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
  animation: failed 1.5s ease-in-out forwards;
}

@keyframes failed {
  0% {
    transform: translateY(0px);
  }

  60% {
    transform: translateY(-10px) scale(1.1);
  }

  70% {
    transform: translateY(-30px) scale(1.3);
  }

  90% {
    transform: translateY(10px) scale(0.9);
  }

  100% {
    transform: translateY(0px) scale(1);
  }
}
</style>
