import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000/api/topic/appendix/upload",
  method: "POST",
  timeout: 3000,
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

const uploadNewTopicAppendix = async (data: FormData) => {
  return await instance.request({
    data,
  });
};

export default uploadNewTopicAppendix;
