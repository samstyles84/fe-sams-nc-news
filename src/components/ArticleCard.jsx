import Voter from "./Voter";
import Comments from "./Comments";

import React from "react";

const ArticleCard = (args) => {
  const { article, loggedInUser } = args;

  const dateitem = new Date(article.created_at).toLocaleDateString();

  return (
    <div className="ArticleContainer">
      <article className="SingleArticle">
        <h2>{article.title}</h2>
        <p>
          by {article.author}, {dateitem}
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
};

export default ArticleCard;
