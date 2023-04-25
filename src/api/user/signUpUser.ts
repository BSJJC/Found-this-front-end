import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000/api/user/signUp",
  method: "POST",
  timeout: 3000,
});

const signUpUser = async (data: {
  email: string;
  userName: string;
  password: string;
}) => {
  return await instance.request({
    data,
  });
};

export default signUpUser;
