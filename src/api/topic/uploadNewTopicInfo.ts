import axios from "axios";

type dataType = {
  founder: string;
  founderName: string;
  founderAvaterID: string;
  title: string;
  text: string;
  appendixIDs: Array<string>;
};

const instance = axios.create({
  baseURL: "http://localhost:5000/api/topic/info/create",
  method: "POST",
  timeout: 3000,
});

const uploadNewTopicInfo = async (data: dataType) => {
  return await instance.request({
    data,
  });
};

export default uploadNewTopicInfo;
