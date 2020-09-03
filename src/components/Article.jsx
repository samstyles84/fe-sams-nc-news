import React, { Component } from "react";
import * as api from "../utils/api";
import Loader from "./Loader";
import ArticleCard from "./ArticleCard";
import ErrorPage from "./ErrorPage";

class Article extends Component {
  state = { article: [], isLoading: true, err: null };

  componentDidMount() {
    this.getArticle(this.props.article_id)
      .then((article) => {
        this.setState({ article, isLoading: false });
      })
      .catch(({ response }) => {
        this.setState({
          isLoading: false,
          err: { msg: response.data.msg, status: response.status },
        });
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.article_id !== this.props.article_id) {
      this.getArticle(this.props.topic)
        .then((article) => {
          this.setState({ article, isLoading: false });
        })
        .catch(({ response }) => {
          this.setState({
            isLoading: false,
            err: { msg: response.data.msg, status: response.status },
          });
        });
    }
  }

  getArticle = (article_id) => {
    return api.fetchArticle(article_id);
  };

  render() {
    const { article, isLoading, err } = this.state;
    if (isLoading) return <Loader />;
    if (err) return <ErrorPage {...err} />;

    console.log(this.props.loggedInUser, "this.props.loggedInUser in Article");

    return (
      <ArticleCard article={article} loggedInUser={this.props.loggedInUser} />
    );
  }
}

export default Article;
