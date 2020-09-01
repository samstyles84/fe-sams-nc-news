import React, { Component } from "react";
import Voter from "./Voter";
import Comments from "./Comments";

class ArticleCard extends Component {
  state = {};

  render() {
    const { article } = this.props;
    return (
      <div className="ArticleContainer">
        <article className="SingleArticle">
          <h2>{article.title}</h2>
          <p>
            by {article.author}, {article.created_at}
          </p>
          <hr />
          <p className="ArticleBody">{article.body}</p>
          <hr />
          <h6>Topic: {article.topic}</h6>
          <Voter
            id={article.article_id}
            votes={article.votes}
            type="articles"
          />
        </article>
        <Comments article={article} />
        <br />
      </div>
    );
  }
}

export default ArticleCard;
