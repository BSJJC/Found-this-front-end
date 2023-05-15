import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000/api/topic/info/get",
  method: "UPDATE",
  timeout: 3000,
});

const likeOrDislikeTopic = async () => {
  return await instance.request({});
};

export default likeOrDislikeTopic;
