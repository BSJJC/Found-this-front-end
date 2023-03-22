<script setup lang="ts">
import { defineAsyncComponent } from "vue";
import { LogInAndSignUp as LogInAndSignUpStore } from "@/stores/index";
import { storeToRefs } from "pinia";

const store = LogInAndSignUpStore();
const { show } = storeToRefs(store);

const LogInAndSignUp = defineAsyncComponent(
  () => import("@/components/LogInAndSignUp.vue")
);
</script>

<template>
  <log-in-and-sign-up v-show="show"></log-in-and-sign-up>

  <router-view v-slot="{ Component }">
    <Component :is="Component" />
  </router-view>
</template>

<style lang="scss" scoped></style>
