import { defineStore } from "pinia";

export const LogInAndSignUp = defineStore({
  id: "LogInAndSignUp",
  state: () => ({
    show: false,
  }),
});

export default LogInAndSignUp;
