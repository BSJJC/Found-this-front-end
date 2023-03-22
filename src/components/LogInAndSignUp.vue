<script lang="ts" setup>
import { defineAsyncComponent } from "vue";
import { logIn } from "@/stores";
import { storeToRefs } from "pinia";

import { circleIcon, copyrightIcon } from "@/imgs";

const store = logIn();
const { mode } = storeToRefs(store);

const LogInForm = defineAsyncComponent(
  () => import("@/components/LogInForm.vue")
);

const SignUpForm = defineAsyncComponent(
  () => import("@/components/SignUpForm.vue")
);
</script>

<template>
  <!-- mask -->
  <div
    class="absolute w-screen h-screen flex justify-center items-center bg-[#0000009e] z-[100]"
  >
    <!-- panel -->
    <div
      id="panel"
      class="rounded-l-lg w-[1px] h-[1px] shadow-xl grid grid-cols-2"
      :class="mode"
    >
      <!-- form -->
      <div id="form" class="bg-white col-span-1 flex flex-col">
        <!-- logo-->
        <div class="w-full h-[70px] flex flex-row flex-none select-none">
          <img
            :src="circleIcon"
            alt="circle icon"
            class="opacity-70 w-[25px]"
          />
          <div class="h-[70px] flex justify-center items-center text-2xl ml-5">
            Web Dump
          </div>
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
            class="w-[20px] mr-2"
          />
          copyright
        </div>
      </div>

      <!-- pattern -->
      <div
        id="pattern"
        class="col-span-1 w-full h-full bg-[#F3F4F8] flex justify-center items-center flex-col opacity-50"
      >
        <div class="flex justify-center items-center flex-col">
          <div class="w-[300px] h-[0px] bg-[#623EBC] rounded-t-[150px]"></div>
          <div
            class="w-[300px] h-[0px] bg-[#9371e8] rounded-b-[150px] blur-lg"
          ></div>
        </div>
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

img {
  -webkit-user-drag: none;
}

input {
  height: 50px;
  width: 100%;
  margin-top: 10px;
  text-indent: 10px;
  border: 1px solid rgb(208, 208, 208);
  border-radius: 8px;
  font-size: large;
  outline: none;
}

#panel {
  animation: panel-in 1.5s ease-in-out forwards;
}
@keyframes panel-in {
  30% {
    height: 81%;
    width: 1px;
  }
  40% {
    height: 79%;
    width: 1px;
  }
  50% {
    height: 80%;
    width: 1px;
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

#pattern {
  z-index: 0;
  transition: all 0.75s ease-in-out;
  * {
    animation: pattern-content-in 1.5s ease-in-out forwards;
  }
}
@keyframes pattern-content-in {
  0% {
    opacity: 0;
  }

  60% {
    height: 0px;
    opacity: 0;
  }

  100% {
    height: 300px;
    opacity: 1;
  }
}

.login-mode {
  #form {
    border-top-left-radius: 16px;
    border-bottom-left-radius: 16px;
  }

  #pattern {
    border-top-right-radius: 16px;
    border-bottom-right-radius: 16px;

    > div {
      transition: all 0.75s ease-in-out;
    }
  }
}

.register-mode {
  #form {
    border-top-right-radius: 16px;
    border-bottom-right-radius: 16px;
    transform: translateX(100%);
  }

  #pattern {
    border-top-left-radius: 16px;
    border-bottom-left-radius: 16px;
    transform: translateX(-100%);

    > div {
      transition: all 0.75s ease-in-out;
      transform: rotate(-540deg);
    }
  }
}
</style>
