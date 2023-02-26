import AppHeader from "./app-header";
import "./app.css";
import TaskList from "../task-list";
import Footer from "../footer";

const minute = 60000;

const App = () => {
  const todoData = [
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
      editing: true,
    },
    {
      id: 3,
      created: new Date(Date.now() - 10 * minute),
      description: "Active Task",
    },
  ];

  return (
    <section className="todoapp">
      <AppHeader />
      <section className="main">
        <TaskList todos={todoData} />
        <Footer />
      </section>
      {/* <SearchPanel />
      <TodoList todos={todoData} /> */}
    </section>
  );
};

export default App;
