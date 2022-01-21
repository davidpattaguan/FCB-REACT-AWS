import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

//DATA EXAMPLE
const taskItemsList = [
  "Follow Edukasyon.ph on Facebook",
  "Follow AWS Siklab Pilipinas on Facebook",
  "Follow Zuittt Coding Bootcamp on Facebook",
];

//TASK MAIN COMPONENT
const TasksList = () => {
  return (
    <ul>
      {taskItemsList.map((task, index) => {
        return <Task taskName={task} key={index} />;
      })}
    </ul>
  );
};

//TASK ITEM
const Task = ({ taskName }) => {
  return <li className="tasks-item">{taskName}</li>;
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
