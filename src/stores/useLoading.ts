import { defineStore } from "pinia";

export const useLoading = defineStore({
  id: "sendLogIn",
  state: () => ({
    show: false,
    animations: {
      in: true,
      out: false,
    },

    loadingUrl: "https://assets9.lottiefiles.com/packages/lf20_ycLT11YW6R.json",
    successUrl: "https://assets4.lottiefiles.com/packages/lf20_npb11FY10i.json",
    failUrl: "https://assets3.lottiefiles.com/packages/lf20_vNDFrng4H8.json",

    loadingSentence: "sending......",
    successSentence: "succese!",
    failSentence: "something wrong...",
  }),
});

export default useLoading;
