import { defineStore } from "pinia";

export const useTopics = defineStore({
  id: "topics",
  state: () => ({
    topics: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  }),
});

export default useTopics;
