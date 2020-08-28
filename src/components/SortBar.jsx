import React from "react";

import { Link } from "@reach/router";

const SortBar = () => {
  return (
    <div className="sortbar">
      Sort by:
      <Link to="/articles/sort/created_at">
        <button>Date created</button>
      </Link>
      <Link to="?sort_by=comment_count">
        <button>Comment count</button>
      </Link>
      <Link to="?sort_by=votes">
        <button>Votes</button>
      </Link>
    </div>
  );
};

export default SortBar;
