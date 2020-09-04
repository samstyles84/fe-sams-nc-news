import React, { Component } from "react";
import ArticlesList from "./ArticlesList";
import * as api from "../../utils/api";
import Loader from "../Loader";
import SortBar from "./SortBar";
import ErrorPage from "../ErrorPage";
import { navigate } from "@reach/router";
import { StyledArticlesContainer } from "../../styling/styledAllArticles";

class AllArticles extends Component {
  state = {
    articles: [],
    isLoading: true,
    order: true,
    topic: "all",
    err: null,
    sort_by: "created_at",
  };

  componentDidMount() {
    let newTopic = this.state.topic;
    if (this.props.topic && this.props.topic !== this.state.topic) {
      newTopic = this.props.topic;
    }
    this.setState({ topic: newTopic }, () => {
      this.getArticles();
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.topic && this.props.topic !== prevState.topic) {
      this.setState({ topic: this.props.topic }, () => {
        this.getArticles();
      });
    }
    if (
      this.state.sort_by !== prevState.sort_by ||
      this.state.order !== prevState.order
    ) {
      this.getArticles();
    }
  }

  getArticles = () => {
    const { sort_by, topic, order } = this.state;
    return api
      .fetchArticles(sort_by, topic, order)
      .then((articles) => {
        this.setState({
          articles,
          isLoading: false,
          err: null,
        });
      })
      .catch(({ response }) => {
        if (response) {
          this.setState({
            isLoading: false,
            err: { msg: response.data.msg, status: response.status },
          });
        } else {
          navigate(`/error`);
        }
      });
  };

  getSortMethod = (clickevent) => {
    this.setState({ sort_by: clickevent.target.id, order: !this.state.order });
  };

  render() {
    const { articles, topic, err, isLoading } = this.state;
    if (isLoading) return <Loader />;
    if (err) return <ErrorPage {...err} />;
    return (
      <div>
        <SortBar
          getSortMethod={this.getSortMethod}
          sort_by={this.state.sort_by}
          order={this.state.order}
        />
        <StyledArticlesContainer>
          <ArticlesList articles={articles} topic={topic} />
        </StyledArticlesContainer>
      </div>
    );
  }
}

export default AllArticles;
