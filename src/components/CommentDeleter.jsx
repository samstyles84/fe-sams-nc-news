import React, { Component } from "react";
import * as api from "../utils/api";

class CommentDeleter extends Component {
  state = {
    commentsToDelete: [],
  };

  handleSubmit = (submitEvent) => {
    const { loggedInUser } = this.props;
    submitEvent.preventDefault();

    const userComments = this.props.comments.filter((comment) => {
      return comment.author === loggedInUser;
    });

    const nonUserComments = this.props.comments.filter((comment) => {
      return comment.author !== loggedInUser;
    });

    const commentIDs = [];

    if (userComments.length === 0) {
      this.props.deleteComment(nonUserComments);
      this.setState((currentState) => {
        return {
          commentsToDelete: [],
        };
      });
    } else {
      userComments.forEach((comment) => {
        commentIDs.push(comment.comment_id);
      });
      return Promise.all(
        userComments.map((comment) => {
          return api.deleteComments(comment.comment_id).then(() => {});
        })
      ).then(() => {
        this.props.deleteComment(nonUserComments);
        this.setState((currentState) => {
          return {
            commentsToDelete: [],
          };
        });
      });
    }
  };

  render() {
    return (
      <section>
        <form onSubmit={this.handleSubmit} className="CommentDeleter">
          <br />
          <button disabled={!this.props.loggedInUser}>
            Delete my comments on this article
          </button>
          <br />
          <br />
        </form>
      </section>
    );
  }
}

export default CommentDeleter;
