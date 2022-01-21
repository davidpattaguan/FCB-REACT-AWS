import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TasksList from "./components/TasksList";
import { useState } from "react";

const App = () => {
  const [taskItemsList, setTaskItemsList] = useState([
    "Follow Edukasyon.ph on Facebook",
    "Follow AWS Siklab Pilipinas on Facebook",
    "Follow Zuittt Coding Bootcamp on Facebook",
  ]);

  return (
    <div className="app">
      <header className="app-header">
        <h1>My Amazing ToDo-List</h1>
        <p>The most simple and amazing todo-list React app.</p>

        <TasksList
          taskItemsList={taskItemsList}
          setTaskItemsList={setTaskItemsList}
        />
      </header>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
