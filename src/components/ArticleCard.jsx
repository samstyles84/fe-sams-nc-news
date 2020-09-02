import React, { Component } from "react";
import Voter from "./Voter";
import Comments from "./Comments";

class ArticleCard extends Component {
  state = {};

  render() {
    const { article, loggedInUser } = this.props;

    return (
      <div className="ArticleContainer">
        <article className="SingleArticle">
          <h2>{article.title}</h2>
          <p>
            by {article.author}, {article.created_at}
          </p>
          <h6>Topic: {article.topic}</h6>
          <hr />
          <p className="ArticleBody">{article.body}</p>
          <hr />

          <Voter
            id={article.article_id}
            votes={article.votes}
            type="articles"
            loggedInUser={loggedInUser}
          />
        </article>
        <Comments article={article} loggedInUser={loggedInUser} />
        <br />
      </div>
    );
  }
}

export default ArticleCard;
