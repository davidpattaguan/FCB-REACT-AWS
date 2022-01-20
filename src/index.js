import React from "react";
import ReactDOM from "react-dom";

//My First Component

const HelloWorld = () => {
  return <h1>Hello World</h1>; //JSX element --> h1
};

ReactDOM.render(<HelloWorld />, document.getElementById("root"));
