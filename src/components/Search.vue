<script lang="ts" setup>
import { ref } from "vue";
import { searchIcon } from "@/imgs";

let maxHeight = ref(0);
let keyWords = ref("");
const list = ref([1]);

function test() {
  if (list.value.length === 0) {
  }
}
</script>

<template>
  <div class="flex flex-row w-[700px] h-[40px] rounded-3xl border shadow-lg">
    <div class="w-1/2 flex justify-center items-center rounded-l-3xl">
      <input class="w-4/6 outline-none text-xl" />
    </div>
    <div class="w-1/2 flex justify-center items-center rounded-r-3xl">
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
      <div class="w-1/5 h-full bg-blue-300">
        <img :src="searchIcon" alt="search icon" />
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
