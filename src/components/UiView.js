import React from "react";

const UiView = (props) => (
  <div className="nav" style={props.navStyle}>
    <button
      onClick={props.onSolveClick}
      style={{ ...props.buttonStyle, visibility: "hidden" }}
    >
      Solve
    </button>
    <button onClick={props.onNewClick} style={props.buttonStyle}>
      New
    </button>
    <button
      onClick={props.onDisplayClick}
      style={{ ...props.buttonStyle, visibility: "hidden" }}
    >
      {props.selectType}
    </button>

    <button
      onClick={props.onSizeClick}
      style={{ ...props.buttonStyle, visibility: "hidden" }}
    >
      {props.selectSize} puzzle
    </button>
  </div>
);

export default UiView;
