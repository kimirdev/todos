import React from "react";
import "./tasks-filter.css";
import PropTypes from "prop-types";

const TasksFilter = ({ changeFilterType, filterType }) => {
  return (
    <ul className="filters">
      <li key="all">
        <button
          className={filterType === "all" ? "selected" : ""}
          onClick={() => changeFilterType("all")}
        >
          All
        </button>
      </li>
      <li key="active">
        <button
          className={filterType === "active" ? "selected" : ""}
          onClick={() => changeFilterType("active")}
        >
          Active
        </button>
      </li>
      <li key="completed">
        <button
          className={filterType === "completed" ? "selected" : ""}
          onClick={() => changeFilterType("completed")}
        >
          Completed
        </button>
      </li>
    </ul>
  );
};

TasksFilter.propTypes = {
  changeFilterType: PropTypes.func,
  filterType: PropTypes.oneOf(["all", "completed", "active"]),
};

export default TasksFilter;
