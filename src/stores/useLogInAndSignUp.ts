import { defineStore } from "pinia";

export const useLogInAndSignUp = defineStore({
  id: "LogInAndSignUp",
  state: () => ({
    mode: "login-mode",
    remember: false,
    show: true,
    logInAnimationUrl:
      "https://assets8.lottiefiles.com/packages/lf20_jcikwtux.json",
    signUpAnimationUrl:
      "https://assets6.lottiefiles.com/packages/lf20_puciaact.json",
  }),
});

export default useLogInAndSignUp;
