import React, { Component } from "react";
import * as api from "../../utils/api";
import { StyledVotingBar } from "../../styling/styledArticle";

class Voter extends Component {
  state = {
    optimisticVotes: 0,
  };

  updateVote = (vote) => {
    api.patchVotes(this.props.id, vote, this.props.type);
    this.setState((currentState) => {
      return { optimisticVotes: currentState.optimisticVotes + vote };
    });
  };
  render() {
    const { votes, loggedInUser } = this.props;
    const { optimisticVotes } = this.state;
    return (
      <StyledVotingBar className="votingBar">
        <br />
        <button
          onClick={(event) => this.updateVote(1)}
          disabled={optimisticVotes === 1 || !loggedInUser}
        >
          Upvote!
        </button>
        Current votes: {votes + optimisticVotes}
        <button
          onClick={(event) => this.updateVote(-1)}
          disabled={optimisticVotes === -1 || !loggedInUser}
        >
          Downvote!
        </button>
      </StyledVotingBar>
    );
  }
}

export default Voter;
