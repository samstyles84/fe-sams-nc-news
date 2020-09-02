import React, { Component } from "react";
import * as api from "../utils/api";

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
      console.log(newComment);
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
      <section>
        <form onSubmit={this.handleSubmit} className="CommentAdder">
          <br />

          <label htmlFor="comment">New Comment:</label>
          <input
            type="text"
            id="body"
            name="body"
            value={this.state.body}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <button disabled={!this.props.loggedInUser || !this.state.body}>
            Add
          </button>
          <br />
          <br />
        </form>
      </section>
    );
  }
}

export default CommentAdder;
