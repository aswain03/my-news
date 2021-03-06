import axios from "axios";

const fakeNewsApi = axios.create({
  baseURL: "https://project-fakenews.herokuapp.com/api",
});

export const getTopics = async () => {
  const { data } = await fakeNewsApi.get("/topics");
  return data.topics;
};

export const getArticles = async ({ topic, sortBy }) => {
  const { data } = await fakeNewsApi.get("/articles", {
    params: {
      topic: topic,
      sort_by: sortBy,
    },
  });
  return data;
};

export const getArticle = async (article_id) => {
  const { data } = await fakeNewsApi.get(`/articles/${article_id}`);
  return data;
};

export const getComments = async (article_id) => {
  const { data } = await fakeNewsApi.get(`/articles/${article_id}/comments`);
  return data.comments;
};

export const postComment = async (article_id, body, username) => {
  const { data } = await fakeNewsApi.post(`articles/${article_id}/comments`, {
    body: body,
    username: username,
  });
  return data.comment;
};

export const deleteComment = async (comment_id) => {
  const { data } = await fakeNewsApi.delete(`comments/${comment_id}`);
  return data;
};

export const patchVotes = async (article_id, num) => {
  const { data } = await fakeNewsApi.patch(`articles/${article_id}`, {
    inc_votes: num,
  });
  return data.article;
};

export const getUser = async (username) => {
  const { data } = await fakeNewsApi.get(`users/${username}`);
  return data.user;
};

export const getUsersData = async () => {
  const { data } = await fakeNewsApi.get(`/users`);
  return data.users;
};
