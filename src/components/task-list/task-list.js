import React from "react";
import Task from "../task";
import "./task-list.css";

const TaskList = ({ todos, removeTask }) => {
  return (
    <ul className="todo-list">
      {todos.map((todo) => {
        return <Task {...todo} removeTask={removeTask} />;
      })}
    </ul>
  );
};

export default TaskList;
