import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://nc-hosting-samstyles84.herokuapp.com/api",
});

export const fetchTopics = () => {
  return axiosInstance.get("/topics").then((topics) => {
    return topics.data.topics;
  });
};

export const fetchArticles = ({ sort_by, topic }, order) => {
  return axiosInstance
    .get("/articles", {
      params: { topic: topic, sort_by: sort_by, order: order },
    })
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

export const patchVotes = (id, inc_votes, type) => {
  return axiosInstance.patch(`/${type}/${id}`, { inc_votes });
};
