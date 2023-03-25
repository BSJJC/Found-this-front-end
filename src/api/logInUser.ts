import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000/api/user/logIn",
  method: "POST",
  timeout: 3000,
});

const logInUser = async (data: { email: string; password: string }) => {
  return await instance.request({
    data,
  });
};

export default logInUser;
