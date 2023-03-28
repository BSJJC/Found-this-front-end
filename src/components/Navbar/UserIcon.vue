<script lang="ts" setup>
import { ref, watch } from "vue";
import { storeToRefs } from "pinia";
import { useLogInAndSignUp } from "@/stores";
import { menuIcon } from "@/imgs/icons";

const logInAndSignUpStore = useLogInAndSignUp();
const { showPanel, loggedIn } = storeToRefs(logInAndSignUpStore);

const name = ref("");
const userOptions = ref(["123", "abc", "666"]);
const showUserOptions = ref(false);

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

function userControl(i: string) {
  console.log(i);
  showUserOptions.value = false;
}
</script>

<template>
  <div class="w-[110px] h-[60px] overflow-hidden relative">
    <div
      class="w-full h-full flex justify-between items-center transition duration-500"
      :style="{ transform: `translateX(${loggedIn ? 0 : 50}%)` }"
    >
      <div
        class="h-[45px] w-[45px] rounded-full flex justify-center items-center text-lg bg-[#7E56DA] text-white transition duration-200 hover:cursor-pointer hover:-translate-y-1"
        @click="
          () => {
            if (loggedIn) {
              showUserInfo();
            } else {
              showLogInAndSignUp();
            }
          }
        "
      >
        {{ !loggedIn ? "Log In" : `${name}` }}
      </div>

      <div
        class="w-[45px] h-[45px] flex justify-center items-center bg-[#d0d0d0] rounded-full transition duration-200 hover:cursor-pointer hover:-translate-y-1"
        @click="showUserOptions = !showUserOptions"
      >
        <img :src="menuIcon" alt="menu icon" class="w-2/3" />
      </div>
    </div>
  </div>

  <div
    class="absolute right-[10px] top-[97px] w-[100px] overflow-hidden rounded-b-lg transitio duration-300 bg-[#9d7ce9] z-[999]"
    :style="{
      height: `${showUserOptions ? userOptions.length * 2 : 0}rem`,
      boxShadow: ` 0px 5px 8px 0px rgba(0, 0, 0, 0.2)`,
    }"
    @mouseleave="showUserOptions = false"
  >
    <div
      v-for="(i, index) in userOptions"
      :key="index"
      class="w-full h-[2rem] text-center flex justify-center items-center text-lg text-white bg-[#9d7ce9] transition duration-200 hover:cursor-pointer hover:-translate-y-1"
      @click="userControl(i)"
    >
      {{ i }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
* {
  user-select: none;
}
</style>
