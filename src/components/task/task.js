import React from "react";
import "./task.css";
import { formatDistanceToNow } from "date-fns";

const Task = ({
  id,
  description,
  created,
  completed,
  removeTask,
  toggleComplete,
}) => {
  let classNames = "";
  if (completed) classNames += "completed";
  return (
    <li key={id} className={classNames}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          onChange={() => toggleComplete(id)}
          checked={completed}
        />
        <label>
          <span className="description" onClick={() => toggleComplete(id)}>
            {description}
          </span>
          <span className="created">
            {formatDistanceToNow(created, { addSuffix: true })}
          </span>
        </label>
        <button className="icon icon-edit"></button>
        <button
          className="icon icon-destroy"
          onClick={() => removeTask(id)}
        ></button>
      </div>
    </li>
  );
};

export default Task;
