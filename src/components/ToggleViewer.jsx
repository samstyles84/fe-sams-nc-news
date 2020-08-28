import React, { Component } from "react";

class ToggleViewer extends Component {
  state = { isVisible: false };
  render() {
    const { isVisible } = this.state;

    return (
      <div>
        <button onClick={this.toggleView}>
          {isVisible ? "Hide Comments" : "Show Comments"}
        </button>
        {isVisible && this.props.children}
      </div>
    );
  }

  toggleView = () => {
    this.setState(({ isVisible }) => ({ isVisible: !isVisible }));
  };
}

export default ToggleViewer;
