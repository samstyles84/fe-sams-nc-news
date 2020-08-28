import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://nc-hosting-samstyles84.herokuapp.com/api",
});

export const fetchTopics = () => {
  return axiosInstance.get("/topics").then((topics) => {
    return topics.data.topics;
  });
};

export const fetchArticles = (topic) => {
  return axiosInstance
    .get("/articles", { params: { topic: topic } })
    .then((articles) => {
      return articles.data.articles;
    });
};

export const fetchArticle = (article_id) => {
  return axiosInstance.get(`/articles/${article_id}`).then((article) => {
    return article.data.article;
  });
};

export const fetchComments = (article_id) => {
  return axiosInstance
    .get(`/articles/${article_id}/comments`)
    .then((comments) => {
      return comments.data.comments;
    });
};
