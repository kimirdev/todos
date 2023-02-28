import React from "react";
import PropTypes from "prop-types";
import "./new-task-form.css";

class NewTaskForm extends React.Component {
  state = {
    inputVal: "",
  };

  static propTypes = {
    addTask: PropTypes.func,
  };

  onInputChange = (e) => {
    this.setState({ inputVal: e.currentTarget.value });
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    if (this.state.inputVal === "") return;
    this.props.addTask(this.state.inputVal);
    this.setState({ inputVal: "" });
  };

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          onChange={this.onInputChange}
          value={this.state.inputVal}
        />
      </form>
    );
  }
}

export default NewTaskForm;
