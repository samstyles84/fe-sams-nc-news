import React, { Component } from "react";
import ArticlesList from "./ArticlesList";
import * as api from "../utils/api";
import Loader from "./Loader";
import SortBar from "./SortBar";

class AllArticles extends Component {
  state = { articles: [], isLoading: true, order: "asc", topic: "all" };

  componentDidMount() {
    let { order } = this.state;
    if (this.props.sort_by) {
      if (order === "desc") order = "asc";
      else order = "desc";
    }

    let { topic } = this.state;
    if (this.props.topic) topic = this.props.topic;

    this.getArticles(this.props).then((articles) => {
      this.setState({ articles, isLoading: false, order: order, topic: topic });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps !== this.props) {
      let { order } = this.state;

      if (this.props.sort_by) {
        if (order === "desc") order = "asc";
        else order = "desc";
      }

      let { topic } = this.state;
      if (this.props.topic) topic = this.props.topic;

      this.getArticles(this.props, order).then((articles) => {
        this.setState({
          articles,
          isLoading: false,
          order: order,
          topic: topic,
        });
      });
    }
  }

  getArticles = (props, order) => {
    return api.fetchArticles(props, order);
  };

  render() {
    if (this.state.isLoading) return <Loader />;
    const { articles } = this.state;
    const { topic } = this.state;
    return (
      <div>
        <SortBar topic={topic} />
        <ArticlesList articles={articles} />
      </div>
    );
  }
}

export default AllArticles;
