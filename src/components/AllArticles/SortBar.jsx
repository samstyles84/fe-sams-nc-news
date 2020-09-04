import React from "react";
import { StyledSortBar } from "../../styling/styledAllArticles";

const SortBar = ({ getSortMethod }) => {
  return (
    <StyledSortBar className="sortbar">
      Sort by:
      <button name="created_at" id="created_at" onClick={getSortMethod}>
        Date created
      </button>
      <button name="comment_count" id="comment_count" onClick={getSortMethod}>
        Comment count
      </button>
      <button name="votes" id="votes" onClick={getSortMethod}>
        Votes
      </button>
    </StyledSortBar>
  );
};

export default SortBar;
