import React from "react";
import Task from "../task";
import "./task-list.css";

const TaskList = ({ todos }) => {
  return (
    <ul className="todo-list">
      {todos.map((todo) => {
        const { id, completed, editing, ...items } = todo;
        const clName = completed ? "completed" : editing ? "editing" : "";
        return (
          <li key={id} className={clName}>
            <Task {...items} />
            {editing ? (
              <input type="text" class="edit" value="Editing task" />
            ) : null}
          </li>
        );
      })}
    </ul>
  );
};

export default TaskList;
