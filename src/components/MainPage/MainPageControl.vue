<script lang="ts" setup>
import { ref } from "vue";
import { useHome } from "@/stores";
import { storeToRefs } from "pinia";
import router from "@/router";

import { ElMessage } from "element-plus";

const sortWays = ref(["POPULAR", "CATEGORIES"]);

const homeStore = useHome();
const { showNavBar } = storeToRefs(homeStore);

const addNewTopicBtn = ref(null);
const copyElTop = ref(0);
const copyElLeft = ref(0);

function addNewTopic() {
  const user = sessionStorage.getItem("user");

  if (!user) {
    ElMessage.error("please log in first.");
    return;
  }

  showNavBar.value = !showNavBar.value;

  const reactObject = (
    addNewTopicBtn.value as unknown as HTMLElement
  ).getBoundingClientRect();

  copyElTop.value = reactObject.top;
  copyElLeft.value = reactObject.left;

  show.value = true;

  setTimeout(() => {
    router.push("addTopic");
  }, 1000);
}

const show = ref(false);
</script>

<template>
  <div class="w-full h-[120px] grid grid-cols-4">
    <!-- topic sort ways -->
    <div class="col-span-3 flex justify-start items-start">
      <div
        v-for="(i, index) in sortWays"
        :key="index"
        class="h-full w-[200px] text-xl flex justify-start items-center text-[#bfbfbf] transition duration-200 ease-in-out hover:text-[#7E56DA] hover:cursor-pointer hover:font-bold"
      >
        {{ i }}
      </div>
    </div>

    <!-- add topic -->
    <div class="col-span-1 flex justify-end items-center">
      <div
        v-if="!show"
        ref="addNewTopicBtn"
        class="z-20 px-8 py-5 rounded-lg bg-[#7E56DA] text-white text-xl transition duration-200 hover: cursor-pointer hover:shadow-[#7E56DA] hover:shadow-lg hover:scale-105 active:scale-100"
        @click="addNewTopic"
      >
        ADD NEW TOPIC
      </div>

      <teleport to="body">
        <div
          v-if="show"
          id="add-topic-in"
          class="fixed z-[200] flex justify-center items-center rounded-lg bg-[#7E56DA] text-white text-xl"
          :style="{ top: `${copyElTop}px`, left: `${copyElLeft}px` }"
        >
          ADD NEW TOPIC
        </div>
      </teleport>
    </div>
  </div>
</template>

<style lang="scss" scoped>
* {
  user-select: none;
}

#add-topic-in {
  animation: add-topic-in 1s ease forwards;
}

@keyframes add-topic-in {
  0% {
    width: 178.19px;
    height: 68px;
    border-radius: 0.5rem;
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1),
      0 4px 6px -4px rgb(0 0 0 / 0.1);
  }

  50% {
    top: 0;
    left: 0;
    font-size: 5rem;
    width: 100vw;
    height: 100vh;
  }

  100% {
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    font-size: 5rem;
    border-radius: 0px;
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1),
      0 4px 6px -4px rgb(0 0 0 / 0.1);
  }
}
</style>
