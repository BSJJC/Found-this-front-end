import { defineStore } from "pinia";

export const useLogInAndSignUp = defineStore({
  id: "LogInAndSignUp",
  state: () => ({
    mode: "login-mode",
    loggedIn: false,

    userAvaterUrl: "",

    rememberAccount: false,

    showPanel: false,

    logInAnimationUrl:
      "https://assets8.lottiefiles.com/packages/lf20_jcikwtux.json",
    signUpAnimationUrl:
      "https://assets6.lottiefiles.com/packages/lf20_puciaact.json",
  }),

  actions: {
    hide() {
      this.showPanel = false;
    },
  },
});

export default useLogInAndSignUp;
