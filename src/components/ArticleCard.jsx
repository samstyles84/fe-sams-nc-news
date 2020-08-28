import React, { Component } from "react";
import ToggleViewer from "./ToggleViewer";
import CommentsList from "./CommentsList";

class ArticleCard extends Component {
  state = {};
  render() {
    const { article } = this.props;
    return (
      <article>
        <h2>{article.title}</h2>
        <p>
          by {article.author}, {article.created_at}
        </p>
        <p className="ArticleBody">{article.body}</p>
        <h6>
          Topic: {article.topic} Votes: {article.votes} Comments:
          {article.comment_count}
        </h6>
        <br />
        <ToggleViewer>
          {<CommentsList article_id={article.article_id} />}
        </ToggleViewer>
      </article>
    );
  }
}

export default ArticleCard;
