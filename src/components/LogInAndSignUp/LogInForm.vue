<script lang="ts" setup>
import { ref, reactive } from "vue";
import { storeToRefs } from "pinia";
import { useLogInAndSignUp, useLoading } from "@/stores/index";
import type { FormInstance, FormRules } from "element-plus";
import logInUser from "@/api/user/logInUser.js";
import disableInputSpace from "@/utils/disableInputSpace";

const logInAndSignUpStore = useLogInAndSignUp();
const { mode, loggedIn, userAvaterID, rememberAccount, showPanel } = storeToRefs(
  logInAndSignUpStore
);

const loadingStore = useLoading();
const { showLoading, status, animations } = storeToRefs(loadingStore);

const ruleFormRef = ref<FormInstance>();

const ruleForm = reactive({
  email: "123@123.com",
  password: "123",
});

const emailCheck = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("Please input the email"));
  }

  const reg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  if (!reg.test(ruleForm.email)) {
    callback(new Error("Please input the right email"));
  }

  if (ruleForm.email !== "") {
    if (!ruleFormRef.value) return;
  }

  callback();
};
const passwordCheck = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("Please input the password"));
  } else {
    if (ruleForm.password !== "") {
      if (!ruleFormRef.value) return;
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

function logIn(formEl: FormInstance | undefined) {
  if (!formEl) return;

  formEl.validate(async (valid) => {
    if (valid) {
      showLoading.value = true;

      try {
        const user = await logInUser({
          email: ruleForm.email,
          password: ruleForm.password,
        });

        setTimeout(() => {
          status.value = "success";
          loggedIn.value = true;

          userAvaterID.value = `http://localhost:5000/api/userAvaters/get/${user.data.userAvaterID}`;

          sessionStorage.setItem("user", JSON.stringify(user.data));

          console.log("log in success");
        }, 1000);

        setTimeout(() => {
          animations.value.out = true;
        }, 2500);

        setTimeout(() => {
          loadingStore.reset();

          showPanel.value = false;
        }, 2800);
      } catch (error) {
        setTimeout(() => {
          status.value = "failed";

          console.log("log ing failed");
          console.log(error);
        }, 1000);
      }
      
    } else {
      console.log("error submit!");
      return false;
    }
  });
}
</script>

<template>
  <div>
    <div class="text-3xl w-[400px] h-[40px] text-[#7E56DA]">Welcome back!</div>

    <el-form class="w-[400px] mt-5" ref="ruleFormRef" :model="ruleForm" :rules="rules">
      <div>Email:</div>

      <el-form-item prop="email">
        <el-input
          v-model="ruleForm.email"
          type="text"
          placeholder="Enter your email"
          class="text-[#7E56DA]"
          @input="ruleForm.email = disableInputSpace(ruleForm.email)"
        />
      </el-form-item>

      <div>Password:</div>

      <el-form-item prop="password">
        <el-input
          v-model="ruleForm.password"
          type="password"
          placeholder="Enter your password"
          class="text-[#7E56DA]"
          @input="ruleForm.password = disableInputSpace(ruleForm.password)"
        />
      </el-form-item>

      <el-form-item>
        <div class="w-full flex justify-between items-center text-lg my-3">
          <div
            class="cursor-pointer h-full flex justify-center items-center flex-row"
            @click="rememberAccount = !rememberAccount"
          >
            <el-checkbox v-model="rememberAccount"></el-checkbox>
            <div
              class="ml-3 select-none transition duration-300"
              :style="{ color: `${rememberAccount ? '#7E56DA' : '#999'}` }"
            >
              Remember account
            </div>
          </div>

          <a href="#" class="transition duration-300 text-[#7E56DA] hover:text-[#a07bf7]"
            >Forget password?</a
          >
        </div>
      </el-form-item>
    </el-form>

    <button
      class="w-[400px] h-[45px] bg-[#7E56DA] text-white text-xl rounded-lg transition duration-200 hover:bg-[#a07bf7]"
      @click="logIn(ruleFormRef)"
    >
      Log in!
    </button>

    <div class="w-1/2 h-[45px] flex justify-center items-center opacity-50">
      Don't have an account?
      <a href="#" class="text-[#7E56DA] hover:text-[#a07bf7]" @click="toSignUpForm"
        >Sign up!</a
      >
    </div>
  </div>
</template>

<style lang="scss" scoped>
.el-input {
  all: unset;
  height: 40px;
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
  color: #da5684;
}
</style>
