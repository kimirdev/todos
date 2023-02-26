import AppHeader from "./app-header";
import "./app.css";
import TaskList from "../task-list";
import Footer from "../footer";
import React from "react";

const minute = 60000;

export default class App extends React.Component {
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
  };

  removeTask = (id) => {
    this.setState((state) => {
      return { todoData: state.todoData.filter((x) => x.id !== id) };
    });
  };

  render() {
    return (
      <section className="todoapp">
        <AppHeader />
        <section className="main">
          <TaskList todos={this.state.todoData} removeTask={this.removeTask} />
          <Footer />
        </section>
        {/* <SearchPanel />
        <TodoList todos={todoData} /> */}
      </section>
    );
  }
}
