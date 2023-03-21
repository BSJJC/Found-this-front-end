<script lang="ts" setup>
import { ref } from "vue";
import logo from "./logo.vue";
import { circleIcon } from "@/imgs";

const remember = ref(false);
</script>

<template>
  <div
    class="absolute w-screen h-screen flex justify-center items-center bg-[#25252595]"
  >
    <div
      id="panel"
      class="rounded-l-lg w-[1px] h-[1px] shadow-xl grid grid-cols-2"
    >
      <div class="bg-white col-span-1 p-10 rounded-l-2xl flex flex-col">
        <!-- logo -->
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

        <!-- form -->
        <div class="w-full flex-grow flex justify-center items-center flex-col">
          <div class="text-4xl w-1/2">Welcome Back!</div>
          <div class="w-1/2 opacity-80">
            Welcome back! Pleace enter yor details.
          </div>

          <el-form class="w-1/2 mt-5">
            <div class="text-xl">Email:</div>
            <el-form-item>
              <input type="text" placeholder="Enter your email" />
            </el-form-item>
            <div class="text-xl">Password:</div>
            <el-form-item>
              <input type="password" placeholder="Enter your password" />
            </el-form-item>
          </el-form>

          <div class="w-1/2 h-[50px] flex justify-between items-center">
            <div
              class="flex fle-cool cursor-pointer h-full justify-center items-center"
              @click="remember = !remember"
            >
              <el-checkbox v-model="remember"></el-checkbox>
              <div class="ml-2 select-none text-lg opacity-70">
                Remember me for 30 days
              </div>
            </div>

            <a
              href="#"
              class="text-[#7D64B9] transition duration-300 hover:text-[#a07bf7] text-lg"
              >Forget password?</a
            >
          </div>

          <button
            class="w-1/2 h-[45px] bg-[#7E56DA] text-white rounded-lg transition duration-200 hover:bg-[#a07bf7]"
          >
            SIgn In
          </button>

          <div
            class="w-1/2 h-[45px] mt-5 flex justify-center items-center opacity-50"
          >
            Don't have an account?&nbsp;
            <a href="#" class="text-[#7E56DA] hover:text-[#a07bf7]">Sign up</a>
          </div>
        </div>

        <!-- copyright -->
        <div class="flex-none h-[70px]">copyright</div>
      </div>

      <div class="col-span-1 w-full h-full bg-blue-200 rounded-r-2xl">2</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
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

#panel {
  animation: panel-in 1.3s ease-in-out forwards;
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
</style>
