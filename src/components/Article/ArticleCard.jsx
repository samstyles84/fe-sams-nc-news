import Voter from "./Voter";
import Comments from "../Comments/Comments";
import React from "react";
import {
  StyledArticleContainer,
  StyledSingleArticle,
} from "../../styling/styledArticle";

const ArticleCard = (args) => {
  const { article, loggedInUser } = args;

  const dateitem = new Date(article.created_at).toLocaleDateString();

  return (
    <StyledArticleContainer className="ArticleContainer">
      <StyledSingleArticle className="SingleArticle">
        <h2>{article.title}</h2>
        <h4>
          by {article.author}, {dateitem}
        </h4>
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
      </StyledSingleArticle>
      <Comments article={article} loggedInUser={loggedInUser} />
      <br />
    </StyledArticleContainer>
  );
};

export default ArticleCard;
