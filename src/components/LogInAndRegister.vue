<script lang="ts" setup>
import { ref } from "vue";
import { circleIcon, copyrightIcon } from "@/imgs";

const remember = ref(false);
const mode = ref("login-mode");
</script>

<template>
  <div
    class="absolute w-screen h-screen flex justify-center items-center bg-[#25252595]"
  >
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

        <!-- Main  -->

        <!-- Log in main page -->
        <div class="w-full flex-grow flex justify-center items-center flex-col">
          <div class="text-3xl w-[400px] h-[40px]">Welcome back!</div>

          <div class="w-[400px] opacity-80">
            Welcome back! Pleace enter yor details.
          </div>

          <el-form class="w-[400px] mt-5">
            <div class="text-xl">Email:</div>

            <el-form-item>
              <input type="text" placeholder="Enter your email" />
            </el-form-item>

            <div class="text-xl">Password:</div>

            <el-form-item>
              <input type="password" placeholder="Enter your password" />
            </el-form-item>

            <el-form-item>
              <div class="w-full flex justify-between items-center text-lg">
                <div
                  class="cursor-pointer h-full flex justify-center items-center flex-row"
                  @click="remember = !remember"
                >
                  <el-checkbox v-model="remember"></el-checkbox>
                  <div
                    class="ml-3 select-none transition duration-300"
                    :style="{ color: `${remember ? '#7E56DA' : '#999'}` }"
                  >
                    Remember me for 30 days
                  </div>
                </div>

                <a
                  href="#"
                  class="transition duration-300 text-[#7E56DA] hover:text-[#a07bf7]"
                  >Forget password?</a
                >
              </div>
            </el-form-item>
          </el-form>

          <button
            class="w-[400px] h-[45px] bg-[#7E56DA] text-white text-xl rounded-lg transition duration-200 my-3 hover:bg-[#a07bf7]"
          >
            Log in
          </button>

          <div
            class="w-1/2 h-[45px] flex justify-center items-center opacity-50"
          >
            Don't have an account?
            <a
              href="#"
              class="text-[#7E56DA] hover:text-[#a07bf7]"
              @click="
                mode === 'login-mode'
                  ? (mode = 'register-mode')
                  : (mode = 'login-mode')
              "
              >Sign up!</a
            >
          </div>
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
  transform: translateY(100%);
}

.mode-change-leave-to {
  opacity: 0;
  transform: translateY(-100%);
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
