import React, { Component } from "react";
import * as api from "../utils/api";
import Loader from "./Loader";
import ArticleCard from "./ArticleCard";

class Article extends Component {
  state = { article: [], isLoading: true };

  componentDidMount() {
    this.getArticle(this.props.article_id).then((article) => {
      this.setState({ article, isLoading: false });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.article_id !== this.props.article_id) {
      this.getArticle(this.props.topic).then((article) => {
        this.setState({ article, isLoading: false });
      });
    }
  }

  getArticle = (article_id) => {
    return api.fetchArticle(article_id);
  };

  render() {
    if (this.state.isLoading) return <Loader />;
    const { article } = this.state;
    return (
      <ArticleCard article={article} loggedInUser={this.props.loggedInUser} />
    );
  }
}

export default Article;
