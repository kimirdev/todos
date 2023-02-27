import React from "react";
import "./footer.css";
import TasksFilter from "../task-filter";

const Footer = ({
  todoCount,
  removeCompletedTasks,
  changeFilterType,
  filterType,
}) => {
  return (
    <footer className="footer">
      <span className="todo-count">{todoCount} items left</span>
      <TasksFilter
        changeFilterType={changeFilterType}
        filterType={filterType}
      />
      <button className="clear-completed" onClick={removeCompletedTasks}>
        Clear completed
      </button>
    </footer>
  );
};

export default Footer;
