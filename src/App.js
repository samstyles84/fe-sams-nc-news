// import "./styling/App.css";
import Header from "./components/Header";
import { Router } from "@reach/router";
import Homepage from "./components/Homepage";
import Nav from "./components/Nav";
import AllArticles from "./components/AllArticles/AllArticles";
import Article from "./components/Article/Article";
import LoginForm from "./components/LoginForm";
import ErrorPage from "./components/ErrorPage";
import { GlobalStyle } from "./styling/styledGlobal";
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
      <div>
        <GlobalStyle />
        <Header />
        <Nav />
        <LoginForm loginUser={this.loginUser} />
        <Router>
          <Homepage path="/" />
          <AllArticles path="/articles/topics/:topic" />
          <Article
            path="/articles/:article_id"
            loggedInUser={this.state.loggedInUser}
          />
          <ErrorPage path="/error" status={408} msg={"Server not responding"} />
          <ErrorPage default status={404} msg={"Path not found"} />
        </Router>
      </div>
    );
  }
}

export default App;
