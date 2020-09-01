import React, { Component } from "react";
import CommentAdder from "./CommentAdder";
import * as api from "../utils/api";
import Loader from "./Loader";

import CommentsList from "./CommentsList";

class Comments extends Component {
  state = {
    isVisible: false,
    comments: [],
    optimisticComments: 0,
    isLoading: true,
  };

  componentDidMount() {
    const { article_id } = this.props.article;
    console.log("mounting", this.props);
    this.getComments(article_id).then((comments) => {
      this.setState({ comments, isLoading: false });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("component updates");
    console.log(prevState);
    console.log(this.state);
    if (prevState.optimisticComments !== this.state.optimisticComments) {
      const { article_id } = this.props.article;
      this.getComments(article_id).then((comments) => {
        this.setState({ comments, isLoading: false });
      });
    }
  }

  getComments = (article_id) => {
    console.log("getting comments", article_id);
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

  render() {
    const { article } = this.props;
    const { isVisible, isLoading } = this.state;
    console.log("rendering");
    if (isLoading) return <Loader />;
    return (
      <div className="CommentsSection">
        <br />
        <h6>
          There are currently{" "}
          {article.comment_count + this.state.optimisticComments} comments.
        </h6>
        <CommentAdder
          addComment={this.addComment}
          article_id={article.article_id}
        />
        <div className="ToggleComments">
          <button onClick={this.toggleView}>
            {isVisible ? "Hide Comments" : "Show Comments"}
          </button>
          {isVisible && <CommentsList comments={this.state.comments} />}
        </div>
        <br />
      </div>
    );
  }
}

export default Comments;
