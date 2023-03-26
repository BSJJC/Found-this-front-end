<script lang="ts" setup>
import { ref, watch } from "vue";
import { storeToRefs } from "pinia";
import { useLogInAndSignUp } from "@/stores";
import { menuIcon } from "@/imgs";

const logInAndSignUpStore = useLogInAndSignUp();
const { showPanel, loggedIn } = storeToRefs(logInAndSignUpStore);

const name = ref("");

watch(
  () => loggedIn.value,
  (val) => {
    if (val) {
      const email = JSON.parse(sessionStorage.getItem("user") as string).email;
      name.value = email.slice(0, 2);
    }
  }
);

function showLogInAndSignUp() {
  showPanel.value = true;
}

function showUserInfo() {
  console.log(1);
}

function test() {
  if (loggedIn.value) {
    showUserInfo();
  } else {
    showLogInAndSignUp();
  }
}
</script>

<template>
  <div class="w-[110px] h-[50px] overflow-hidden">
    <div
      class="w-full h-full flex justify-between items-center transition duration-500"
      :style="{ transform: `translateX(${loggedIn ? 0 : 50}%)` }"
    >
      <div
        class="h-[45px] w-[45px] rounded-full flex justify-center items-center text-lg bg-[#9d7ce9] text-white hover:cursor-pointer"
        @click="test"
      >
        {{ !loggedIn ? "Log In" : `${name}` }}
      </div>

      <div
        class="w-[45px] h-[45px] flex justify-center items-center bg-[#d0d0d0] rounded-full hover:cursor-pointer"
      >
        <img :src="menuIcon" alt="menu icon" class="w-2/3" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
* {
  user-select: none;
}
</style>
