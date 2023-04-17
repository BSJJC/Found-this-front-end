<script lang="ts" setup>
import { ref } from "vue";
import { searchVue } from "@/imgs/icons";

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
  <div
    class="flex justify-center items-center flex-row w-[700px] h-[50px] rounded-3xl border shadow-md"
  >
    <!-- search input -->
    <div
      class="w-[calc(100%-100px)] flex justify-center items-center rounded-l-3xl"
    >
      <input
        class="w-5/6 outline-none text-xl text-[#7E56DA]"
        placeholder="I want..."
      />
    </div>

    <!-- search buttton -->
    <div
      class="w-[50px] h-[40px] rounded-3xl bg-[#7E56DA] shadow shadow-[#9375da] flex justify-center items-center cursor-pointer"
    >
      <search-vue color="white" class="w-[30px]"> </search-vue>
    </div>
  </div>
</template>

<style lang="scss" scoped>
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

ul {
  z-index: 999;
  * {
    z-index: 999;
  }
}
</style>
