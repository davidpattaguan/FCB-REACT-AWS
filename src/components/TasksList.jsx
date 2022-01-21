import React from "react";
import Task from "./Task";
import { useState } from "react";

const TasksList = ({ taskItemsList, setTaskItemsList }) => {
  const [taskItem, setTaskItem] = useState("");

  const inputChangeHandler = (e) => {
    setTaskItem(e.target.value);
  };

  const addTaskHandler = () => {
    setTaskItemsList([taskItem, ...taskItemsList]);
    setTaskItem("");
  };

  return (
    <div>
      <input
        className="task-input"
        placeholder="Create a new task"
        onChange={inputChangeHandler}
        onBlur={addTaskHandler}
        value={taskItem}
      />
      <ul>
        {taskItemsList.map((task, index) => {
          return <Task taskName={task} key={index} />;
        })}
      </ul>
    </div>
  );
};

export default TasksList;
