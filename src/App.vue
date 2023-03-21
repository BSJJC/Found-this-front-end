<script setup lang="ts">
import { defineAsyncComponent } from "vue";

const LogInAndRegisterPage = defineAsyncComponent(
  () => import("@/components/LogInAndRegister.vue")
);
</script>

<template>
  <log-in-and-register-page v-show="true"></log-in-and-register-page>

  <router-view v-slot="{ Component }">
    <Component :is="Component" />
  </router-view>
</template>

<style lang="scss" scoped></style>
