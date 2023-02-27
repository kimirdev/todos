import AppHeader from "./app-header";
import "./app.css";
import TaskList from "../task-list";
import Footer from "../footer";
import React from "react";

const minute = 60000;

export default class App extends React.Component {
  count = 1000;

  state = {
    todoData: [
      {
        id: 1,
        description: "Completed Task",
        created: new Date(Date.now() - 5 * minute),
        completed: true,
      },
      {
        id: 2,
        description: "Editing Task",
        created: new Date(Date.now() - 17 * minute),
        completed: false,
      },
      {
        id: 3,
        created: new Date(Date.now() - 10 * minute),
        description: "Active Task",
        completed: false,
      },
    ],
    filterType: "all",
  };

  addTask = (description) => {
    this.setState((state) => {
      return {
        todoData: [
          ...state.todoData,
          {
            id: this.count++,
            description: description,
            created: new Date(Date.now()),
            completed: false,
          },
        ],
      };
    });
  };

  removeTask = (id) => {
    this.setState((state) => {
      return { todoData: state.todoData.filter((x) => x.id !== id) };
    });
  };

  removeCompletedTasks = () => {
    this.setState((state) => {
      return { todoData: state.todoData.filter((x) => !x.completed) };
    });
  };

  toggleComplete = (id) => {
    this.setState((oldState) => {
      const idx = oldState.todoData.findIndex((x) => x.id === id);

      const newItem = Object.assign({}, oldState.todoData[idx]);
      newItem.completed = !newItem.completed;

      return {
        todoData: [
          ...oldState.todoData.slice(0, idx),
          newItem,
          ...oldState.todoData.slice(idx + 1),
        ],
      };
    });
  };

  changeFilterType = (type) => {
    this.setState({ ...this.state, filterType: type });
  };

  render() {
    let todos = this.state.todoData;
    if (this.state.filterType === "active")
      todos = todos.filter((x) => !x.completed);
    if (this.state.filterType === "completed")
      todos = todos.filter((x) => x.completed);
    return (
      <section className="todoapp">
        <AppHeader addTask={this.addTask.bind(this)} />
        <section className="main">
          <TaskList
            todos={todos}
            removeTask={this.removeTask}
            toggleComplete={this.toggleComplete}
          />
          <Footer
            todoCount={this.state.todoData.filter((x) => !x.completed).length}
            removeCompletedTasks={this.removeCompletedTasks}
            changeFilterType={this.changeFilterType.bind(this)}
            filterType={this.state.filterType}
          />
        </section>
      </section>
    );
  }
}
