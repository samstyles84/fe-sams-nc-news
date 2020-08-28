import React, { Component } from "react";
import * as api from "../utils/api";
import Loader from "./Loader";

class CommentsList extends Component {
  state = { comments: [], isLoading: true };

  componentDidMount() {
    this.getComments(this.props.article_id).then((comments) => {
      this.setState({ comments, isLoading: false });
    });
  }

  getComments = (article_id) => {
    return api.fetchComments(article_id);
  };

  render() {
    if (this.state.isLoading) return <Loader />;
    const { comments } = this.state;

    return (
      <ul>
        {comments.map((comment) => {
          return (
            <section key={comment.comment_id}>
              <p>
                by {comment.author}, {comment.created_at}
              </p>
              <p className="CommentBody">{comment.body}</p>
              <h6>Votes: {comment.votes}</h6>
              <br />
            </section>
          );
        })}
      </ul>
    );
  }
}

export default CommentsList;
