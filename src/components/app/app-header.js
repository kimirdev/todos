import React from "react";
import NewTaskForm from "../new-task-form";
import PropTypes from "prop-types";

const AppHeader = ({ addTask }) => {
  return (
    <header className="header">
      <h1>todos</h1>
      <NewTaskForm addTask={addTask} />
    </header>
  );
};

AppHeader.propTypes = {
  addTask: PropTypes.func,
};
export default AppHeader;
