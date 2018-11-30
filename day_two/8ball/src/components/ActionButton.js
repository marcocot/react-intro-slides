import React from "react";

class ActionButton extends React.Component {
  render() {
    return <button onClick={this.props.onClick}>{this.props.label}</button>;
  }
}

export default ActionButton;
