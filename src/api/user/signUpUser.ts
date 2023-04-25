import axios from "axios";

type dataType = {
  email: string;
  userName: string;
  password: string;
};

const instance = axios.create({
  baseURL: "http://localhost:5000/api/user/signUp",
  method: "POST",
  timeout: 3000,
});

const signUpUser = async (data: dataType) => {
  return await instance.request({
    data,
  });
};

export default signUpUser;
