<script lang="ts" setup>
// const bgUrl = ``;
// const userUrl = ``;
const userUrl = `http://localhost:5000/api/administratorAvater/641128f008a8d42d758a715d`;
const bgUrl = `http://localhost:5000/api/topicBackground/64210f2e07d89082ede20e46`;
</script>

<template>
  <div class="flex justify-center items-center">
    <div
      class="w-[80%] h-[400px] m-[20px] rounded-xl overflow-hidden p-[30px] bg-white shadow-md shadow-[#d5d5d5] transition duration-300 hover:cursor-pointer hover:shadow-xl hover:shadow-[#7e56da] hover:-translate-y-1"
    >
      <!-- title -->
      <div
        class="w-full h-1/3 rounded-xl overflow-hidden flex justify-start items-center p-8"
        :style="{ backgroundImage: `url(${bgUrl})`, backgroundSize: 'contain' }"
      >
        <div class="text-[2rem] text-white">TOPIC</div>
      </div>

      <!-- info -->
      <div class="w-full h-2/3 pt-6 grid grid-rows-2">
        <div class="w-full h-full flex justify-center items-center flex-row">
          <!-- topics -->
          <div class="w-[25%] h-full flex justify-center items-center flex-col">
            <div
              class="w-full h-1/3 text-md flex justify-start items-center text-[#adadad]"
            >
              TOPICS
            </div>
            <div class="w-full h-2/3 text-2xl text-[#5d5d5d]">114514</div>
          </div>

          <!-- last active -->
          <div class="w-[75%] h-full">
            <div
              class="w-full h-full flex justify-center items-center flex-col pl-8"
            >
              <div
                class="w-full h-1/3 text-md flex justify-start items-center flex-row text-[#adadad]"
              >
                LAST ACTIVE
              </div>
              <div class="w-full h-2/3 text-2xl text-[#5d5d5d]">114514</div>
            </div>
          </div>
        </div>

        <!-- last topic -->
        <div class="w-full h-full flex justify-center items-center flex-col">
          <div
            class="w-full h-1/3 text-md flex justify-start items-center flex-row text-[#adadad]"
          >
            LAST TOPIC
          </div>
          <div
            class="w-full h-2/3 text-2xl text-[#5d5d5d] flex justify-center items-center flex-row"
          >
            <div class="h-full w-[20%] flex justify-start items-center">
              <el-avatar :size="50" :src="userUrl">
                <img src="https://empty" />
              </el-avatar>
            </div>
            <div class="h-full w-[80%] text-[1.2rem] overflow-clip">
              Lorem ipsum, dolor sit amet consectetur consectetur consectetur
              consectetur consectetur
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
