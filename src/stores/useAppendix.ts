import { defineStore } from "pinia";

type fileType = {
  name: string;
  extends: string;
  uuid: string;
  binaryString: string;
};

export const useAppendix = defineStore({
  id: "appendix",
  state: () => ({
    fileList: [] as fileType[],
  }),
});

export default useAppendix;
