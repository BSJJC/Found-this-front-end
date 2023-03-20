<script lang="ts" setup>
import { ref } from "vue";
import { searchIcon } from "@/imgs";

const maxHeight = ref(0);
const keyWords = ref("");
const list = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

const _list = ref([
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
]);

function listFilte() {
  if (keyWords.value.length === 0) {
    _list.value = [...list];

    maxHeight.value = (_list.value.length >= 5 ? 5 : _list.value.length) * 48;

    return;
  }

  _list.value = [...list];
  for (let i = 0; i < _list.value.length; i++) {
    if (
      _list.value[i].toString().toLowerCase().indexOf(keyWords.value) === -1
    ) {
      _list.value.splice(i, 1);
      i--;
    }
  }

  maxHeight.value = (_list.value.length >= 5 ? 5 : _list.value.length) * 48;
}
</script>

<template>
  <div class="flex flex-row w-[700px] h-[50px] rounded-3xl border shadow-lg">
    <div class="w-1/2 flex justify-center items-center rounded-l-3xl">
      <input class="w-4/6 outline-none text-xl" />
    </div>

    <div class="h-full w-2 flex justify-center items-center">
      <el-divider direction="vertical" class="h-full" />
    </div>

    <div class="w-1/2 flex justify-around items-center rounded-r-3xl">
      <div class="w-3/4 h-full">
        <input
          v-model="keyWords"
          class="w-full h-full transition duration-300 focus:outline-none text-xl"
          type="text"
          placeholder="Type to filter"
          @click="
            maxHeight === 0
              ? (maxHeight = (_list.length >= 5 ? 5 : _list.length) * 48)
              : (maxHeight = 0)
          "
          @focusout="maxHeight = 0"
          @input="listFilte"
        />

        <ul
          class="value-list rounded-b-xl"
          :style="{ maxHeight: `${maxHeight}px` }"
        >
          <el-scrollbar height="240px">
            <transition-group name="list">
              <li
                v-for="(i, index) in _list"
                :key="_list[index]"
                class="overflow-hidden h-[3rem] p-[1rem] flex items-center cursor-pointer bg-[#fafcfd75] transition duration-300 hover:bg-[#fafcfdf3] hover:-translate-y-1"
                @click="keyWords = i.toString()"
              >
                {{ i }}
              </li>
            </transition-group>
          </el-scrollbar>
        </ul>
      </div>
      <div
        class="w-[50px] h-[40px] rounded-3xl bg-[#2088E5] shadow shadow-[#2089e5a9] flex justify-center items-center cursor-pointer"
      >
        <img :src="searchIcon" alt="search icon" class="w-[30px]" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.list-leave-active {
  position: absolute;
}

.value-list {
  overflow: hidden;
  box-shadow: 0px 5px 8px 0px rgba(0, 0, 0, 0.2);
  transition: 0.3s ease;
}

.el-divider {
  height: 80%;
  margin: 0px;
}
</style>
