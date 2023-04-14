import { defineStore } from "pinia";

type fileType = {
  name: string;
  extends: string;
  uuid: string;
  binaryString: string;
};

export const useNewTopic = defineStore({
  id: "newTopic",
  state: () => ({
    topicName: "",
    editorText: "",
    fileList: [] as fileType[], // just for show all files
    allAppendixs: [] as FormData[],
  }),
});

export default useNewTopic;
