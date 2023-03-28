<script setup lang="ts"></script>

<template>
  <router-view v-slot="{ Component }">
    <Component :is="Component" />
  </router-view>
</template>

<style lang="scss" scoped></style>
