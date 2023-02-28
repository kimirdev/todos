import React from "react";
import "./task.css";
import { formatDistanceToNow } from "date-fns";
import PropTypes from "prop-types";

const Task = ({
  id,
  description,
  created,
  completed,
  removeTask,
  toggleComplete,
}) => {
  return (
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
          created {formatDistanceToNow(created, { addSuffix: true })}
        </span>
      </label>
      {/* <button className="icon icon-edit"></button> */}
      <button
        className="icon icon-destroy"
        onClick={() => removeTask(id)}
      ></button>
    </div>
  );
};

Task.propTypes = {
  id: PropTypes.number,
  description: PropTypes.string,
  created: PropTypes.object,
  completed: PropTypes.bool,
  removeTask: PropTypes.func,
  toggleComplete: PropTypes.func,
};

export default Task;
