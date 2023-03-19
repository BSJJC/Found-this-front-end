<script lang="ts" setup>
import { ref } from "vue";
import logo from "@/imgs/logo.vue";

let searchContent = ref("dsad123啊啊啊");
</script>

<template>
  <div class="flex justify-between items-center px-10 h-full">
    <div>
      <logo></logo>
    </div>
    <div>2</div>
    <div>3</div>
  </div>
</template>

<style scoped>
.el-input {
  width: 30rem;
  height: 40px;
  font-size: 18px;
}
</style>
