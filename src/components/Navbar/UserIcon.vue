<script lang="ts" setup>
import { ref, defineAsyncComponent, onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useLogInAndSignUp } from "@/stores";
import { menuVue } from "@/imgs/icons";

const logInAndSignUp = defineAsyncComponent(
  () => import("@/components/LogInAndSignUp/LogInAndSignUp.vue")
);

const logInAndSignUpStore = useLogInAndSignUp();
const { showPanel, loggedIn, userAvaterUrl } = storeToRefs(logInAndSignUpStore);

const userOptions = ref(["123", "abc", "666"]);
const showUserOptions = ref(false);

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

onMounted(() => {
  const user = JSON.parse(sessionStorage.getItem("user")!);

  if (user) {
    loggedIn.value = true;
    userAvaterUrl.value = `http://localhost:5000/api/userAvaters/get/${user.userAvaterUrl}`;
  }
});
</script>

<template>
  <div class="w-[110px] h-[60px] overflow-hidden absolute">
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
        <transition name="opacity-fade" mode="out-in">
          <div v-if="!loggedIn">
            {{ "Log In" }}
          </div>

          <div v-else>
            <img
              :src="userAvaterUrl"
              alt="user avater"
              class="shadow-lg rounded-full"
            />
          </div>
        </transition>
      </div>

      <teleport to="body">
        <log-in-and-sign-up v-show="showPanel"></log-in-and-sign-up>
      </teleport>

      <div
        class="w-[45px] h-[45px] flex justify-center items-center bg-[#d0d0d0] shadow-lg rounded-full transition duration-200 hover:cursor-pointer hover:-translate-y-1"
        @click="showUserOptions = !showUserOptions"
      >
        <menu-vue color="black" class="w-2/3"></menu-vue>
      </div>
    </div>
  </div>

  <div
    class="absolute right-[10px] top-[75px] w-[100px] overflow-hidden rounded-lg transitio duration-300 bg-[#9d7ce9] z-[999]"
    :style="{
      height: `${showUserOptions ? userOptions.length * 2 : 0}rem`,
      boxShadow: ` 0px 5px 8px 0px rgba(0, 0, 0, 0.2)`,
    }"
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
@use "@/scss/animations.scss";

* {
  user-select: none;
}
</style>
