import axios from "axios";

const fakeNewsApi = axios.create({
  baseURL: "https://project-fakenews.herokuapp.com/api",
});

export const getTopics = async () => {
  const { data } = await fakeNewsApi.get("/topics");
  return data.topics;
};
