import { defineStore } from "pinia";

export const useHome = defineStore({
  id: "home",
  state: () => ({
    showNavBar: true,
  }),
});

export default useHome;
