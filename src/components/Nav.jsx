import React, { Component } from "react";
import * as api from "../utils/api";
import { Link } from "@reach/router";
import { navigate } from "@reach/router";

class Nav extends Component {
  state = { topics: [], err: null };

  componentDidMount() {
    this.getTopics()
      .then((topics) => {
        this.setState({ topics });
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
  }

  getTopics = () => {
    return api.fetchTopics();
  };

  render() {
    const { topics } = this.state;

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
