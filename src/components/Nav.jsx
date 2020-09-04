import React, { Component } from "react";
import * as api from "../utils/api";
import { Link, navigate } from "@reach/router";
import { StyledNav, StyledNavButton } from "../styling/styledGlobal";

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
      <StyledNav>
        <Link to="/">
          <StyledNavButton>Home</StyledNavButton>
        </Link>
        <Link to="/articles/topics/all">
          <StyledNavButton>All Articles</StyledNavButton>
        </Link>
        <br />
        {topics.map((topic) => {
          return (
            <Link to={`/articles/topics/${topic.slug}`} key={topic.slug}>
              <StyledNavButton>{topic.slug}</StyledNavButton>
            </Link>
          );
        })}
      </StyledNav>
    );
  }
}

export default Nav;
