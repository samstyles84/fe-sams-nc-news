import React, { Component } from "react";
import * as api from "../../utils/api";

class CommentAdder extends Component {
  state = {
    body: "",
  };

  handleSubmit = (submitEvent) => {
    submitEvent.preventDefault();

    const { article_id, loggedInUser } = this.props;
    const comment = {
      username: loggedInUser,
      body: this.state.body,
    };

    api.postComment(article_id, comment).then((newComment) => {
      this.props.addComment(newComment);
    });

    this.setState((currentState) => {
      return {
        body: "",
      };
    });
  };

  handleChange = (changeEvent) => {
    const value = changeEvent.target.value;
    const id = changeEvent.target.id;
    this.setState(() => {
      return { [id]: value };
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="CommentAdder">
        <label htmlFor="comment"></label>
        <textarea
          name="body"
          id="body"
          cols="30"
          rows="3"
          value={this.state.body}
          onChange={this.handleChange}
          className="resizedTextbox"
        ></textarea>
        <br />
        <button disabled={!this.props.loggedInUser || !this.state.body}>
          Add new comment
        </button>
        <br />
      </form>
    );
  }
}

export default CommentAdder;
