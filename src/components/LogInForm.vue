<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { logIn } from "@/stores/index";

const logInStore = logIn();
const { mode, remember } = storeToRefs(logInStore);

function toSignUpForm() {
  mode.value = "sign-up-mode";
}
</script>

<template>
  <div>
    <div class="text-3xl w-[400px] h-[40px] text-[#7E56DA]">Welcome back!</div>

    <div class="w-[400px] opacity-80">
      Welcome back! Pleace enter your details.
    </div>

    <el-form class="w-[400px] mt-5">
      <div class="text-xl">Email:</div>

      <el-form-item>
        <input
          type="text"
          placeholder="Enter your email"
          class="text-[#7E56DA]"
        />
      </el-form-item>

      <div class="text-xl">Password:</div>

      <el-form-item>
        <input
          type="password"
          placeholder="Enter your password"
          class="text-[#7E56DA]"
        />
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
      Log in!
    </button>

    <div class="w-1/2 h-[45px] flex justify-center items-center opacity-50">
      Don't have an account?
      <a
        href="#"
        class="text-[#7E56DA] hover:text-[#a07bf7]"
        @click="toSignUpForm"
        >Sign up!</a
      >
    </div>
  </div>
</template>

<style lang="scss" scoped>
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
