import "./App.css";
import Header from "./components/Header";
import { Router } from "@reach/router";
import Homepage from "./components/Homepage";
import Nav from "./components/Nav";
import AllArticles from "./components/AllArticles";
import Article from "./components/Article";
import LoginForm from "./components/LoginForm";
import ErrorPage from "./components/ErrorPage";

import React, { Component } from "react";

class App extends Component {
  state = {
    loggedInUser: null,
  };

  loginUser = (loggedInUser) => {
    this.setState((currentState) => {
      return { loggedInUser: loggedInUser };
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Nav />
        <LoginForm loginUser={this.loginUser} />
        <Router>
          <Homepage path="/" />
          <AllArticles path="/articles" />
          <AllArticles path="/articles/sort/:sort_by" />
          <AllArticles path="/articles/topics/:topic" />
          <AllArticles path="/articles/topics/:topic/:sort_by" />
          <Article
            path="/articles/:article_id"
            loggedInUser={this.state.loggedInUser}
          />
          <ErrorPage default status={404} msg={"Path not found"} />
        </Router>
      </div>
    );
  }
}

export default App;
