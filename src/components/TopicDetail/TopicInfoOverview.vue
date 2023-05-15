<script lang="ts" setup>
interface dataType {
  type: string;
  num: string;
}

const data: Array<dataType> = [
  {
    type: "REPLIES",
    num: "40",
  },
  {
    type: "VIEW",
    num: "200",
  },
  {
    type: "LIKES",
    num: "80",
  },
];
</script>

<template>
  <div class="grid grid-cols-3">
    <div
      class="flex justify-center items-center flex-col text-lg"
      v-for="(i, index) in data"
      :key="index"
    >
      <div>{{ i.type }}</div>
      <div>{{ i.num }}</div>
    </div>
  </div>
</template>

<style lnag="scss" scoped></style>
