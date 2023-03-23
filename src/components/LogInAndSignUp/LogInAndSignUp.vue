<script lang="ts" setup>
import { defineAsyncComponent } from "vue";
import { logIn, LogInAndSignUp } from "@/stores";
import { storeToRefs } from "pinia";
import { copyrightIcon } from "@/imgs";

const LottieAnimation = defineAsyncComponent(
  () => import("@/components/Effects/LottieAnimation.vue")
);

const SquareBackground = defineAsyncComponent(
  () => import("@/components/Effects/SquareBackground.vue")
);

const SendLogIn = defineAsyncComponent(
  () => import("@/components/LogInAndSignUp/SendLogIn.vue")
);

const logo = defineAsyncComponent(() => import("@/components/logo.vue"));
const LogInForm = defineAsyncComponent(
  () => import("@/components/LogInAndSignUp/LogInForm.vue")
);
const SignUpForm = defineAsyncComponent(
  () => import("@/components/LogInAndSignUp/SignUpForm.vue")
);

const logInStore = logIn();
const { mode } = storeToRefs(logInStore);

const LogInAndSignUpStore = LogInAndSignUp();
const { show, logInAnimationUrl, signUpAnimationUrl } =
  storeToRefs(LogInAndSignUpStore);
</script>

<template>
  <!-- mask -->
  <div
    class="absolute w-screen h-screen flex justify-center items-center bg-[#0000009e] z-[100]"
    @click.self="show = false"
  >
    <send-log-in></send-log-in>
    <!-- panel -->
    <div
      id="panel"
      class="w-[1px] h-[1px] shadow-xl grid grid-cols-2"
      :class="mode"
    >
      <!-- form -->
      <div
        id="form"
        class="bg-white col-span-1 flex flex-col relative overflow-hidden"
      >
        <square-background
          class="absolute w-full h-full -translate-x-10"
        ></square-background>

        <!-- logo-->
        <div class="w-full h-[70px] flex flex-row flex-none select-none">
          <logo class="text-3xl"></logo>
        </div>

        <!-- Main form  -->
        <div class="w-full flex-grow flex justify-center items-center flex-col">
          <transition name="mode-change" mode="out-in">
            <!-- Log in main page -->
            <div v-if="mode === 'login-mode'">
              <log-in-form></log-in-form>
            </div>

            <!-- Register main page -->
            <div v-else>
              <sign-up-form></sign-up-form>
            </div>
          </transition>
        </div>

        <!-- copyright -->
        <div
          class="flex-none h-[70px] flex justify-start items-end opacity-60 select-none"
        >
          <img
            :src="copyrightIcon"
            alt="copyright icon"
            class="w-[20px] mr-1"
          />
          copyright
        </div>
      </div>

      <!-- decorate -->
      <div
        id="decorate"
        class="col-span-1 w-full h-full flex justify-center items-center overflow-hidden relative"
      >
        <div class="absolute w-full h-full bg-[#ffffff72]"></div>
        <transition name="mode-change" mode="out-in">
          <lottie-animation
            v-if="mode === 'login-mode'"
            :animationUrl="logInAnimationUrl"
            class="w-2/3"
          ></lottie-animation>
          <lottie-animation
            v-else
            :animationUrl="signUpAnimationUrl"
            class="w-2/3"
          ></lottie-animation>
        </transition>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.mode-change-enter-active,
.mode-change-leave-active {
  transition: all 0.3s ease-in-out;
}

.mode-change-enter-from {
  opacity: 0;
  transform: translateY(50px);
}

.mode-change-leave-to {
  opacity: 0;
  transform: translateY(-50px);
}

#panel {
  animation: panel-in 1.5s ease-in-out forwards;
}
@keyframes panel-in {
  30% {
    height: 81%;
    width: 5px;
  }
  40% {
    height: 79%;
    width: 5px;
  }
  50% {
    height: 80%;
    width: 5px;
  }
  80% {
    height: 80%;
    width: 82%;
  }
  90% {
    height: 80%;
    width: 78%;
  }
  100% {
    height: 80%;
    width: 80%;
  }
}

#form {
  z-index: 10;
  transition: all 0.75s ease-in-out;
  animation: form-padding-in 1.5s ease-in-out forwards;
  > * {
    animation: form-content-in 1.5s ease-in-out forwards;
  }
}
@keyframes form-padding-in {
  0% {
    padding: 0px;
  }

  50% {
    padding: 0px;
  }

  100% {
    padding: 40px;
  }
}
@keyframes form-content-in {
  0% {
    opacity: 0;
    height: 0px;
  }

  70% {
    opacity: 0;
    height: 0px;
  }

  100% {
    opacity: 1;
  }
}

#decorate {
  z-index: 0;
  transition: all 0.75s ease-in-out;
}

.login-mode {
  #form {
    border-top-left-radius: 16px;
    border-bottom-left-radius: 16px;
  }

  #decorate {
    border-top-right-radius: 16px;
    border-bottom-right-radius: 16px;
  }
}

.sign-up-mode {
  #form {
    border-top-right-radius: 16px;
    border-bottom-right-radius: 16px;
    transform: translateX(100%);
  }

  #decorate {
    border-top-left-radius: 16px;
    border-bottom-left-radius: 16px;
    transform: translateX(-100%);
  }
}
</style>