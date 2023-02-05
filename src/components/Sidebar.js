import React, { Component } from "react";
import SolvingAnim from "./SolvingAnim";

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <SolvingAnim solving={this.props.solving} />
      </div>
    );
  }
}

export default Sidebar;
