import React, { Component } from "react";
import ArticlesList from "./ArticlesList";
import * as api from "../utils/api";
import Loader from "./Loader";
import SortBar from "./SortBar";

class AllArticles extends Component {
  state = { articles: [], isLoading: true, order: "asc" };

  componentDidMount() {
    console.log("mounted with: ", this.props);

    let { order } = this.state;
    if (this.props.sort_by) {
      if (order === "desc") order = "asc";
      else order = "desc";
    }

    this.getArticles(this.props).then((articles) => {
      this.setState({ articles, isLoading: false, order: order });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("updated with: ", this.props);
    if (prevProps !== this.props) {
      let { order } = this.state;
      if (this.props.sort_by) {
        if (order === "desc") order = "asc";
        else order = "desc";
      }

      this.getArticles(this.props, order).then((articles) => {
        this.setState({ articles, isLoading: false, order: order });
      });
    }
  }

  getArticles = (props, order) => {
    return api.fetchArticles(props, order);
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
