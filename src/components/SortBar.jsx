import { Link } from "@reach/router";

import React, { Component } from "react";

class SortBar extends Component {
  render() {
    const { topic } = this.props;
    let sortString = "/articles/sort/";

    if (topic !== "all") {
      sortString = `/articles/topics/${topic}/`;
    }

    return (
      <div className="sortbar">
        Sort by:
        <Link to={`${sortString}created_at`}>
          <button>Date created</button>
        </Link>
        <Link to={`${sortString}comment_count`}>
          <button>Comment count</button>
        </Link>
        <Link to={`${sortString}votes`}>
          <button>Votes</button>
        </Link>
      </div>
    );
  }
}

export default SortBar;
