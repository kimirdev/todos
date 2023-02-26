import React from "react";
import "./task.css";
import { formatDistanceToNow } from "date-fns";

const Task = ({ description, created }) => {
  return (
    <div className="view">
      <input className="toggle" type="checkbox" />
      <label>
        <span className="description">{description}</span>
        <span className="created">
          {formatDistanceToNow(created, { addSuffix: true })}
        </span>
      </label>
      <button className="icon icon-edit"></button>
      <button className="icon icon-destroy"></button>
    </div>
  );
};

export default Task;
