import { defineStore } from "pinia";

export const useLogIn = defineStore({
  id: "logIn",
  state: () => ({
    mode: "login-mode",
    remember: false,
  }),
});

export default useLogIn;
