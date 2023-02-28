import React from "react";
import "./footer.css";
import TasksFilter from "../task-filter";
import PropTypes from "prop-types";

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

Footer.propTypes = {
  todoCount: PropTypes.number,
  removeCompletedTasks: PropTypes.func,
  changeFilterType: PropTypes.func,
  filterType: PropTypes.oneOf(["all", "active", "completed"]),
};

export default Footer;
