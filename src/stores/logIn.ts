import { defineStore } from "pinia";

export const logIn = defineStore({
  id: "logIn",
  state: () => ({
    mode: "login-mode",
    remember: false,
  }),
});

export default logIn;
