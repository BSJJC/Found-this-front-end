<script lang="ts" setup>
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { LogInAndSignUp } from "@/stores";
import { loginIcon, menuIcon } from "@/imgs";

const state = ref("not-logged-in");

const store = LogInAndSignUp();
const { show } = storeToRefs(store);
</script>

<template>
  <div class="w-[100px] h-[40px] relative" :class="state">
    <div
      id="user-icon"
      class="h-[40px] w-[40px] bg-[#8b8b8b5f] rounded-full flex justify-center items-center cursor-pointer absolute z-0"
    >
      <span>BR</span>
    </div>

    <div
      id="menu-icon"
      class="h-[40px] w-[40px] rounded-full flex justify-center items-center cursor-pointer absolute right-0 z-0"
    >
      <img :src="menuIcon" alt="menu icon" class="w-[90%]" />
    </div>

    <div
      id="login-icon"
      class="h-[40px] w-[40px] bg-[#8b8b8b5f] rounded-full flex justify-center items-center cursor-pointer absolute z-10 hover:-translate-y-1 hover:shadow-lg"
    >
      <el-tooltip content="Log in" placement="bottom" effect="light">
        <img
          :src="loginIcon"
          alt="log in icon"
          class="w-[90%]"
          @click="show = !show"
        />
      </el-tooltip>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.not-logged-in {
  * {
    transition: all 0.3s ease-in-out;
  }

  #user-icon {
    left: -40px;
  }

  #menu-icon {
    opacity: 0;
  }

  #login-icon {
    right: 0px;
  }
}

.logged-in {
  * {
    transition: all 0.3s ease-in-out;
  }

  #user-icon {
    left: 0px;
    background: #2089e5a9;
  }

  #menu-icon {
    opacity: 1;
    background: #2089e5a9;
  }

  #login-icon {
    right: -40px;
    background: #2089e5a9;
  }
}
</style>
