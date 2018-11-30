import React from "react";

class Display extends React.Component {
  render() {
    return (
      <input
        type="text"
        readOnly
        value={this.props.value}
        placeholder={this.props.placeholder}
      />
    );
  }
}

export default Display;
