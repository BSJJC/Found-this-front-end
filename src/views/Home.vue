<script setup lang="ts">
import { defineAsyncComponent, ref, watch } from "vue";
import { useHome } from "@/stores";
import { storeToRefs } from "pinia";

const NavBar = defineAsyncComponent(
  () => import("@/components/Navbar/NavBar.vue")
);
const MainPage = defineAsyncComponent(
  () => import("@/components/MainPage/MainPage.vue")
);

const homeStore = useHome();
const { showNavBar } = storeToRefs(homeStore);

const scrollbarHeihgt = ref("90%");

watch(
  () => showNavBar.value,
  () => {
    if (showNavBar.value) {
      scrollbarHeihgt.value = "90%";
    } else {
      scrollbarHeihgt.value = "100%";
    }
  }
);
</script>

<template>
  <div class="h-screen overflow-hidden">
    <transition name="hide">
      <nav-bar v-show="showNavBar"></nav-bar>
    </transition>

    <el-scrollbar :height="scrollbarHeihgt">
      <main-page></main-page>
    </el-scrollbar>
  </div>
</template>

<style lang="scss" scoped>
.hide-enter-active,
.hide-leave-active {
  transition: all 0.3s ease-in-out;
}

.hide-enter-from,
.hide-leave-to {
  transform: translateY(-100%);
  height: 0px;
  opacity: 0;

  * {
    opacity: 0;
    transition: all 0.3s ease-in-out;
  }
}

.hide-enter-to,
.hide-leave-from {
  transform: translateY(0%);
  height: 100px;
  opacity: 1;

  * {
    opacity: 1;
    transition: all 0.3s ease-in-out;
  }
}

.el-scrollbar {
  transition: all 0.3s ease-in-out !important;
}
</style>
