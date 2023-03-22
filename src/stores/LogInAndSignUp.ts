import { defineStore } from "pinia";

export const LogInAndSignUp = defineStore({
  id: "LogInAndSignUp",
  state: () => ({
    show: false,
    logInAnimationUrl:
      "https://assets8.lottiefiles.com/packages/lf20_jcikwtux.json",
    signUpAnimationUrl:
      "https://assets6.lottiefiles.com/packages/lf20_puciaact.json",
  }),
});

export default LogInAndSignUp;
