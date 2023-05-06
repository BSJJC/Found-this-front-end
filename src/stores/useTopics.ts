import { defineStore } from "pinia";

interface config {
  _id: string;
  founder: string;
  founderName: string;
  founderAvaterID: string,
  title: string;
  text: string;
  appendixIDs: Array<string>;
  bgID: string;
  isDeleted: boolean;
}

const useTopics = defineStore({
  id: "topics",
  state: () => ({
    topics: [] as config[],
  }),
});

export default useTopics;
