import { defineStore } from "pinia";

export const useTopics = defineStore({
  id: "topics",
  state: () => ({
    topics: [],
  }),
});

export default useTopics;
