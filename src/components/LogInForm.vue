<script lang="ts" setup>
import { ref, reactive } from "vue";
import { storeToRefs } from "pinia";
import { logIn } from "@/stores/index";
import type { FormInstance, FormRules } from "element-plus";

const logInStore = logIn();
const { mode, remember } = storeToRefs(logInStore);

const ruleFormRef = ref<FormInstance>();

const ruleForm = reactive({
  email: "",
  password: "",
});

const emailCheck = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("Please input the email"));
  }

  const reg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  if (!reg.test(ruleForm.email)) {
    callback(new Error("Pleace input the right email"));
  }

  if (ruleForm.email !== "") {
    if (!ruleFormRef.value) return;
    ruleFormRef.value.validateField("checkPass", () => null);
  }

  callback();
};
const passwordCheck = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("Please input the password"));
  } else {
    if (ruleForm.password !== "") {
      if (!ruleFormRef.value) return;
      ruleFormRef.value.validateField("checkPass", () => null);
    }
    callback();
  }
};

const rules = reactive<FormRules>({
  email: [{ validator: emailCheck, trigger: "blur" }],
  password: [{ validator: passwordCheck, trigger: "blur" }],
});

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

    <el-form
      class="w-[400px] mt-5"
      ref="ruleFormRef"
      :model="ruleForm"
      :rules="rules"
    >
      <div class="text-xl">Email:</div>

      <el-form-item prop="email">
        <el-input
          v-model="ruleForm.email"
          type="text"
          placeholder="Enter your email"
          class="text-[#7E56DA]"
        />
      </el-form-item>

      <div class="text-xl">Password:</div>

      <el-form-item prop="password">
        <el-input
          v-model="ruleForm.password"
          type="password"
          placeholder="Enter your password"
          class="text-[#7E56DA]"
        />
      </el-form-item>

      <el-form-item>
        <div class="w-full flex justify-between items-center text-lg my-3">
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
      class="w-[400px] h-[45px] bg-[#7E56DA] text-white text-xl rounded-lg transition duration-200 hover:bg-[#a07bf7]"
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
.el-input {
  all: unset;
  height: 50px;
  width: 100%;
  margin-top: 10px;
  text-indent: 10px;
  border: 1px solid rgb(208, 208, 208);
  border-radius: 10px;
  font-size: large;
  outline: none;
}

:deep(.el-input__wrapper) {
  all: unset;
  display: block;
  height: 100%;
  width: 100%;
  padding: 0;
  border-radius: 8px;
  box-shadow: none !important;
}

:deep(.el-input__inner) {
  all: unset;
  display: block;
  width: 95%;
  height: 100%;
  padding-right: 10px;
  color: #7e56da;
}

:deep(.el-form-item__error) {
  font-size: 1rem;
}
</style>
