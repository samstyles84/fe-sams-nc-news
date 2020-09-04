import React, { Component } from "react";
import * as api from "../../utils/api";

class CommentDeleter extends Component {
  state = {
    commentsToDelete: [],
  };

  handleSubmit = (submitEvent) => {
    const { comment } = this.props;
    submitEvent.preventDefault();
    return api.deleteComments(comment.comment_id).then((comment) => {
      this.props.deleteComment(comment);
    });
  };

  render() {
    return (
      <section>
        <form onSubmit={this.handleSubmit} className="CommentDeleter">
          {this.props.loggedInUser &&
            this.props.loggedInUser === this.props.comment.author && (
              <button>Delete comment</button>
            )}
        </form>
      </section>
    );
  }
}

export default CommentDeleter;
