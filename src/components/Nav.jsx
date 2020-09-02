import React, { Component } from "react";
import * as api from "../utils/api";
import { Link } from "@reach/router";
import ErrorPage from "./ErrorPage";

class Nav extends Component {
  state = { topics: [], err: null };

  componentDidMount() {
    this.getTopics().then((topics) => {
      this.setState({ topics });
    });
  }

  getTopics = () => {
    return api.fetchTopics().catch((error) => {
      this.setState({
        isLoading: false,
        err: { msg: error.message, status: 408 },
      });
    });
  };

  render() {
    const { topics, err } = this.state;
    if (err) return <ErrorPage {...err} />;
    return (
      <nav>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/articles">
          <button>All Articles</button>
        </Link>
        <br />
        {topics.map((topic) => {
          return (
            <Link to={`/articles/topics/${topic.slug}`} key={topic.slug}>
              <button>{topic.slug}</button>
            </Link>
          );
        })}
      </nav>
    );
  }
}

export default Nav;
