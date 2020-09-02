import React, { Component } from "react";
import * as api from "../utils/api";

class LoginForm extends Component {
  state = {
    username: null,
    isValid: true,
    loggedIn: false,
  };

  handleSubmit = (submitEvent) => {
    submitEvent.preventDefault();
    console.log(this.state.username, "this.state.username");

    if (this.state.username === null) {
      this.setState((currentState) => {
        return {
          isValid: false,
        };
      });
    } else {
      api.fetchUser(this.state.username).then((res) => {
        if (res.status === 200) {
          this.props.loginUser(this.state.username);
          this.setState((currentState) => {
            return {
              loggedIn: true,
            };
          });
        }
      });
    }

    this.setState((currentState) => {
      return {
        isValid: true,
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
      <section className="LoginForm">
        {!this.state.loggedIn ? (
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="username">Enter Username: </label>
            <input
              type="text"
              id="username"
              name="username"
              onChange={this.handleChange}
            />
            <button>Login</button>
          </form>
        ) : (
          <section>
            Logged in as {this.state.username}
            <button
              onClick={() => {
                this.props.loginUser(null);
                this.setState({
                  username: null,
                  loggedIn: false,
                  isValid: true,
                });
              }}
            >
              Logout
            </button>
          </section>
        )}
      </section>
    );
  }
}

export default LoginForm;
