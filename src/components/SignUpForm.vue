<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { logIn } from "@/stores/index";

const store = logIn();
const { mode } = storeToRefs(store);
</script>

<template>
  <div>
    <div class="text-3xl w-[400px] h-[40px] text-[#7E56DA]">
      Welcome! New friend!
    </div>

    <div class="w-[400px] opacity-80">Pleace enter your details.</div>

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

      <div class="text-xl">Confirm Password:</div>

      <el-form-item>
        <input
          type="password"
          placeholder="Enter your password again"
          class="text-[#7E56DA]"
        />
      </el-form-item>
    </el-form>

    <button
      class="w-[400px] h-[45px] bg-[#7E56DA] text-white text-xl rounded-lg transition duration-200 my-3 hover:bg-[#a07bf7]"
    >
      Sign up!
    </button>

    <div class="w-1/2 h-[45px] flex justify-center items-center opacity-50">
      Already have an account?
      <a
        href="#"
        class="text-[#7E56DA] hover:text-[#a07bf7]"
        @click="
          mode === 'login-mode'
            ? (mode = 'register-mode')
            : (mode = 'login-mode')
        "
      >
        Log in!</a
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
