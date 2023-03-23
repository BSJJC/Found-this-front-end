import { defineStore } from "pinia";

export const sendLogIn = defineStore({
  id: "sendLogIn",
  state: () => ({
    animations: {
      in: false,
      out: false,
    },

    sendingUrl: "https://assets9.lottiefiles.com/packages/lf20_ycLT11YW6R.json",
    successUrl: "https://assets4.lottiefiles.com/packages/lf20_npb11FY10i.json",
    failUrl: "https://assets3.lottiefiles.com/packages/lf20_vNDFrng4H8.json",

    sendingSentence: "sending......",
    successSentence: "success : )",
    failSentence: "something wrong : (",
  }),
});

export default sendLogIn;
