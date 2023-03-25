<script setup lang="ts">
import { defineAsyncComponent } from "vue";
import { useLogInAndSignUp } from "@/stores/index";
import { storeToRefs } from "pinia";

const store = useLogInAndSignUp();
1;
const { showPanel } = storeToRefs(store);

const LogInAndSignUp = defineAsyncComponent(
  () => import("@/components/LogInAndSignUp/LogInAndSignUp.vue")
);
</script>

<template>
  <transition name="opacity">
    <log-in-and-sign-up v-show="showPanel"></log-in-and-sign-up>
  </transition>

  <router-view v-slot="{ Component }">
    <Component :is="Component" />
  </router-view>
</template>

<style lang="scss" scoped>
.opacity-enter-active,
.opacity-leave-active {
  transition: all 0.3s ease-in-out;
}

.opacity-enter-from,
.opacity-leave-to {
  opacity: 0;
}

.opacity-enter-to,
.opacity-leave-from {
  opacity: 1;
}
</style>
