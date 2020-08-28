import React, { Component } from "react";
import ArticlesList from "./ArticlesList";
import * as api from "../utils/api";
import Loader from "./Loader";
import SortBar from "./SortBar";

class AllArticles extends Component {
  state = { articles: [], isLoading: true };

  componentDidMount() {
    console.log("mounted with: ", this.props);
    this.getArticles(this.props).then((articles) => {
      this.setState({ articles, isLoading: false });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("updated with: ", this.props);
    if (prevProps !== this.props) {
      this.getArticles(this.props).then((articles) => {
        this.setState({ articles, isLoading: false });
      });
    }
  }

  getArticles = (props) => {
    return api.fetchArticles(props);
  };

  render() {
    if (this.state.isLoading) return <Loader />;
    const { articles } = this.state;
    return (
      <div>
        <SortBar />
        <ArticlesList articles={articles} />
      </div>
    );
  }
}

export default AllArticles;
