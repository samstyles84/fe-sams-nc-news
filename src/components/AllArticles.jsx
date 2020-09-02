import React, { Component } from "react";
import ArticlesList from "./ArticlesList";
import * as api from "../utils/api";
import Loader from "./Loader";
import SortBar from "./SortBar";
import ErrorPage from "./ErrorPage";

class AllArticles extends Component {
  state = {
    articles: [],
    isLoading: true,
    order: "asc",
    topic: "all",
    err: null,
  };

  componentDidMount() {
    let { order } = this.state;
    if (this.props.sort_by) {
      if (order === "desc") order = "asc";
      else order = "desc";
    }

    let { topic } = this.state;
    if (this.props.topic) topic = this.props.topic;

    this.getArticles(this.props)
      .then((articles) => {
        this.setState({
          articles,
          isLoading: false,
          order: order,
          topic: topic,
          err: null,
        });
      })
      .catch(({ response }) => {
        this.setState({
          isLoading: false,
          err: { msg: response.data.msg, status: response.status },
        });
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

      this.getArticles(this.props, order)
        .then((articles) => {
          this.setState({
            articles,
            isLoading: false,
            order: order,
            topic: topic,
            err: null,
          });
        })
        .catch(({ response }) => {
          this.setState({
            isLoading: false,
            err: { msg: response.data.msg, status: response.status },
          });
        });
    }
  }

  getArticles = (props, order) => {
    return api.fetchArticles(props, order);
  };

  render() {
    const { articles, topic, err, isLoading } = this.state;
    if (isLoading) return <Loader />;
    if (err) return <ErrorPage {...err} />;
    return (
      <div>
        <SortBar topic={topic} />
        <section className="ArticleList">
          <h3 className="ArticlesHeading">{topic} articles</h3>
          <ArticlesList articles={articles} />
        </section>
      </div>
    );
  }
}

export default AllArticles;
