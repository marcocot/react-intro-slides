import React from "react";

class Counter extends React.PureComponent {
  render() {
    return (
      <div>
        Mary had {this.props.count} little lambs
      </div>
    )
  }
}

export default Counter;
