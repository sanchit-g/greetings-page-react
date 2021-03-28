import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

let currTime = new Date().getHours();
let greeting = "";
const cssStyle = {};

if (currTime >= 1 && currTime < 12) {
  greeting = "Good Morning";
  cssStyle.color = "green";
} else if (currTime >= 12 && currTime < 19) {
  greeting = "Good Afternoon";
  cssStyle.color = "orange";
} else {
  greeting = "Good Night";
  cssStyle.color = "black";
}

const displayTime = new Date().toLocaleTimeString([], {
  hour: "2-digit",
  minute: "2-digit",
});

ReactDOM.render(
  <>
    <div className="container">
      <div className="inside-container">
        <h1 className="time">{displayTime}</h1>
        <h1 className="greeting">
          Hello Sir, <span style={cssStyle}>{greeting}</span>
        </h1>
      </div>
    </div>
  </>,
  document.getElementById("root")
);
