import React from "react";
import { Link } from "@reach/router";

const ArticlesList = ({ articles }) => {
  return (
    <ul>
      {articles.map((article) => {
        return (
          <li key={article.article_id}>
            <Link to={`/articles/${article.article_id}`}>
              <h3>{article.title}</h3>
            </Link>
            <p>by: {article.author}</p>
            <h4>Topic: {article.topic}</h4>
            <h6>Created at: {article.created_at}</h6>
            <h6>
              Votes: {article.votes} Comments: {article.comment_count}
            </h6>
          </li>
        );
      })}
    </ul>
  );
};

export default ArticlesList;
