import React from "react";
import "./App.css";
import Header from "./components/Header";
import { Router } from "@reach/router";
import Homepage from "./components/Homepage";
import Nav from "./components/Nav";
import AllArticles from "./components/AllArticles";
import Article from "./components/Article";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Router>
        <Homepage path="/" />
        <AllArticles path="/articles" />
        <AllArticles path="/articles/sort/:sort_by" />
        <AllArticles path="/articles/topics/:topic" />
        <AllArticles path="/articles/topics/:topic/:sort_by" />
        <Article path="/articles/:article_id" />
      </Router>
    </div>
  );
}

export default App;
