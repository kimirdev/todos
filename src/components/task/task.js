import React from "react";
import "./task.css";
import { formatDistanceToNow } from "date-fns";

class Task extends React.Component {
  state = {
    completed: this.props.completed,
    editing: this.props.editing,
  };

  onComplete = () => {
    this.setState((state) => {
      return { completed: !state.completed, editing: state.editing };
    });
  };

  render() {
    const { id, description, created } = this.props;
    let classNames = "";
    if (this.state.completed) classNames += "completed";
    if (this.state.editing) classNames += "editing";
    return (
      <li key={id} className={classNames}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            onChange={this.onComplete}
            checked={this.state.completed}
          />
          <label>
            <span className="description" onClick={this.onComplete}>
              {description}
            </span>
            <span className="created">
              {formatDistanceToNow(created, { addSuffix: true })}
            </span>
          </label>
          <button className="icon icon-edit"></button>
          <button
            className="icon icon-destroy"
            onClick={() => this.props.removeTask(id)}
          ></button>
        </div>
        {this.state.editing ? (
          <input type="text" class="edit" value="Editing task" />
        ) : null}
      </li>
    );
  }
}

export default Task;
