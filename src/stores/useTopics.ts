import { defineStore } from "pinia";

export const useTopics = defineStore({
  id: "topics",
  state: () => ({
    topics: [4, 3, 2, 1],
  }),
});

export default useTopics;
