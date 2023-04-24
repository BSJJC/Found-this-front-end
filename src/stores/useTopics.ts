import { defineStore } from "pinia";

interface config {
  _id: string;
  founder: string;
  title: string;
  text: string;
  appendixIDs: Array<string>;
  bgID: string;
  isDeleted: boolean;
}

export const useTopics = defineStore({
  id: "topics",
  state: () => ({
    topics: [] as config[],
  }),
});

export default useTopics;
