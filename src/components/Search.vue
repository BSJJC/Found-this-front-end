<script lang="ts" setup>
import { ref } from "vue";

let maxHeight = ref(0);
let keyWords = ref("");
const list = ref([1]);

function test() {
  if (list.value.length === 0) {
  }
}
</script>

<template>
  <div class="flex flex-row w-[700px] h-[40px]">
    <div class="w-1/2">
      <input
        class="w-full h-full outline-none rounded-l-2xl indent-5 text-xl bg-red-200"
      />
    </div>
    <div class="w-1/2 h-full flex justify-center items-center bg-blue-200">
      <div class="w-3/4 h-full">
        <input
          v-model="keyWords"
          class="w-full h-full transition duration-300 focus:outline-none"
          type="text"
          placeholder="Type to filter"
          @click="
            maxHeight === 0 ? (maxHeight = list.length * 48) : (maxHeight = 0)
          "
          @focusout="maxHeight = 0"
          @input="test"
        />

        <ul class="value-list" :style="{ maxHeight: `${maxHeight}px` }">
          <el-scrollbar height="320px">
            <li v-for="i in list" @click="keyWords = i.toString()">
              {{ i }}
            </li>
          </el-scrollbar>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.value-list {
  overflow: hidden;
  box-shadow: 0px 5px 8px 0px rgba(0, 0, 0, 0.2);
  transition: 0.3s ease;

  li {
    height: 3rem;
    background-color: #fafcfd;
    padding: 1rem;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
}
</style>
