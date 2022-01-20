import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const TasksList = () => {
  return (
    <ul>
      <li className="tasks-item">Follow Edukasyon.ph on Facebook</li>
      <li className="tasks-item">Follow AWS Siklab Pilipinas on Facebook</li>
      <li className="tasks-item">Follow Zuittt Coding Bootcamp on Facebook</li>
    </ul>
  );
};

const App = () => {
  const paraStyle = {
    marginBottom: "20px",
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>My Amazing ToDo-List</h1>
        <p style={paraStyle}>
          The most simple and amazing todo-list React app.
        </p>
        <TasksList />
      </header>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
