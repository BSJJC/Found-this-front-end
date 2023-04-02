import { defineStore } from "pinia";

export const useTopics = defineStore({
  id: "topics",
  state: () => ({
    topics: [1, 2, 3, 4],
  }),
});

export default useTopics;
