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
  {
    type: "LAST REPLY",
    num: "14hr",
  },
];
</script>

<template>
  <div class="bg-blue-500 grid grid-cols-4">
    <div
      class="flex justify-center items-center bg-red-300 flex-col text-lg"
      v-for="(i, index) in data"
      :key="index"
    >
      <div>{{ i.type }}</div>
      <div>{{ i.num }}</div>
    </div>
  </div>
</template>

<style lnag="scss" scoped></style>
