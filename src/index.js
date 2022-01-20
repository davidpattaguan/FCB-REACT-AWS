import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//My First Component

const App = () => {
  return (
    <div className="app">
      <header className="app-header">
        <h1>My Amazing ToDo-List</h1>
        <p>The most simple and amazing todo-list React app.</p>
      </header>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
