import React from "react";
import Task from "../task";
import "./task-list.css";
import PropTypes from "prop-types";

const TaskList = ({ todos, removeTask, toggleComplete }) => {
  return (
    <ul className="todo-list">
      {todos.map((todo) => {
        let classCompleted = todo.completed ? "completed" : "";
        return (
          <li key={todo.id} className={classCompleted}>
            <Task
              {...todo}
              removeTask={removeTask}
              toggleComplete={toggleComplete}
            />
          </li>
        );
      })}
    </ul>
  );
};

TaskList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      description: PropTypes.string,
      created: PropTypes.object,
      completed: PropTypes.bool,
    })
  ),
  removeTask: PropTypes.func,
  toggleComplete: PropTypes.func,
};

export default TaskList;
