import React, { Component } from "react";

class ToggleViewer extends Component {
  state = { isVisible: false };
  render() {
    const { isVisible } = this.state;
    if (this.state.forceRefresh !== false) {
      if (this.props.forceRefresh) {
        this.setState((currentState) => {
          return { isVisible: true, forceRefresh: false };
        });
      }
    }

    console.log("in the toggleviewer", this.props.forceRefresh);

    return (
      <div className="ToggleComments">
        <button onClick={this.toggleView}>
          {isVisible ? "Hide Comments" : "Show Comments"}
        </button>
        {/* {this.props.forceRefresh && <NewComment />} */}
        {isVisible && this.props.children}
      </div>
    );
  }

  toggleView = () => {
    this.setState(({ isVisible }) => ({ isVisible: !isVisible }));
  };
}

export default ToggleViewer;
