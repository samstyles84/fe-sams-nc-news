import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://nc-hosting-samstyles84.herokuapp.com/api",
  timeout: 2000,
});

export const fetchTopics = () => {
  return axiosInstance.get("/topics").then((topics) => {
    return topics.data.topics;
  });
  // .catch((error) => {
  //   console.log(error.code);
  //   console.log(error.message);
  //   console.log(error.stack);
  //   const err = {};
  //   if (err.code === "ECONNABORTED") {
  //     err.msg = error.message;
  //     err.status = 408;
  //   }
  //   return err;
  // });
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
    .then(({ data: { comments } }) => {
      return comments;
    });
};

export const patchVotes = (id, inc_votes, type) => {
  return axiosInstance.patch(`/${type}/${id}`, { inc_votes });
};

export const postComment = (id, comment) => {
  return axiosInstance.post(`/articles/${id}/comments`, comment);
};

export const deleteComments = (id) => {
  return axiosInstance.delete(`/comments/${id}`);
};

export const fetchUser = (username) => {
  return axiosInstance.get(`/users/${username}`);
};
