import React, { Component } from "react";
import CommentAdder from "./CommentAdder";
import * as api from "../../utils/api";
import Loader from "../Loader";
import CommentsList from "./CommentsList";
import { StyledCommentsContainer } from "../../styling/styledComments";

class Comments extends Component {
  state = {
    isVisible: false,
    comments: [],
    optimisticComments: 0,
    isLoading: true,
  };

  componentDidMount() {
    const { article_id } = this.props.article;
    this.getComments(article_id).then((comments) => {
      this.setState({ comments, isLoading: false });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.optimisticComments !== this.state.optimisticComments) {
      const { article_id } = this.props.article;
      this.getComments(article_id).then((comments) => {
        this.setState({ comments, isLoading: false });
      });
    }
  }

  getComments = (article_id) => {
    return api.fetchComments(article_id);
  };

  toggleView = () => {
    return this.setState(({ isVisible }) => ({ isVisible: !isVisible }));
  };

  addComment = (newComment) => {
    this.setState((currentState) => {
      return {
        comments: [newComment, ...currentState.comments],
        optimisticComments: currentState.optimisticComments + 1,
      };
    });
  };

  deleteComment = (removedComment) => {
    this.setState((currentState) => {
      return {
        comments: [...currentState.comments],
        optimisticComments: currentState.optimisticComments - 1,
      };
    });
  };

  render() {
    const { article, loggedInUser } = this.props;
    const { isVisible, isLoading } = this.state;
    if (isLoading) return <Loader />;
    const optimisticNoOfComments =
      article.comment_count + this.state.optimisticComments;
    return (
      <StyledCommentsContainer className="CommentsSection">
        <br />
        <CommentAdder
          addComment={this.addComment}
          article_id={article.article_id}
          loggedInUser={loggedInUser}
        />
        <div className="ToggleComments">
          <button onClick={this.toggleView}>
            {isVisible
              ? `Hide Comments (${optimisticNoOfComments})`
              : `Show Comments (${optimisticNoOfComments})`}
          </button>
          {isVisible && (
            <CommentsList
              comments={this.state.comments}
              loggedInUser={loggedInUser}
              deleteComment={this.deleteComment}
            />
          )}
        </div>
        <br />
      </StyledCommentsContainer>
    );
  }
}

export default Comments;
