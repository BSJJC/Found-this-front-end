import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000/api/topic/info/create",
  method: "POST",
  timeout: 3000,
});

const uploadNewTopicInfo = async (data: {
  topicID: string;
  founder: string;
  title: string;
  text: string;
}) => {
  return await instance.request({
    data,
  });
};

export default uploadNewTopicInfo;
