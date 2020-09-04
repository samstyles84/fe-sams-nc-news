import React from "react";
import {
  StyledSortBar,
  StyledSortButton,
} from "../../styling/styledAllArticles";

const SortBar = ({ getSortMethod, sort_by, order }) => {
  return (
    <StyledSortBar>
      Sort by:
      <StyledSortButton
        name="created_at"
        id="created_at"
        onClick={getSortMethod}
        selected={sort_by === "created_at"}
        order={order}
      >
        Date created
      </StyledSortButton>
      {sort_by === "created_at" && order === true && <span>▲</span>}
      {sort_by === "created_at" && order === false && <span>▼</span>}
      <StyledSortButton
        name="comment_count"
        id="comment_count"
        onClick={getSortMethod}
        selected={sort_by === "comment_count"}
        order={order}
      >
        Comment count
      </StyledSortButton>
      {sort_by === "comment_count" && order === true && <span>▲</span>}
      {sort_by === "comment_count" && order === false && <span>▼</span>}
      <StyledSortButton
        name="votes"
        id="votes"
        onClick={getSortMethod}
        selected={sort_by === "votes"}
        order={order}
      >
        Votes
      </StyledSortButton>
      {sort_by === "votes" && order === true && <span>▲</span>}
      {sort_by === "votes" && order === false && <span>▼</span>}
    </StyledSortBar>
  );
};

export default SortBar;
