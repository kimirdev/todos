import React from "react";
import Task from "../task";
import "./task-list.css";

const TaskList = ({ todos, removeTask, toggleComplete }) => {
  return (
    <ul className="todo-list">
      {todos.map((todo) => {
        return (
          <Task
            {...todo}
            removeTask={removeTask}
            toggleComplete={toggleComplete}
          />
        );
      })}
    </ul>
  );
};

export default TaskList;
