import React, { Component } from "react";
import * as api from "../utils/api";

class CommentAdder extends Component {
  state = {
    username: "",
    body: "",
  };

  handleSubmit = (submitEvent) => {
    submitEvent.preventDefault();

    const { article_id } = this.props;
    const comment = {
      username: this.state.username,
      body: this.state.body,
    };

    api.postComment(article_id, comment).then((comment) => {
      this.props.addComment(comment);
    });

    this.setState((currentState) => {
      return {
        username: "",
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
      <section>
        <form onSubmit={this.handleSubmit} className="CommentAdder">
          <br />
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="comment">Comment:</label>
          <input
            type="text"
            id="body"
            name="body"
            value={this.state.body}
            onChange={this.handleChange}
          />
          <br />
          <button>Add comment</button>
        </form>
      </section>
    );
  }
}

export default CommentAdder;
