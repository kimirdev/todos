import React, { useRef, useState } from 'react'

import TaskList from '../task-list'
import Footer from '../footer'

import AppHeader from './app-header'

import './app.css'

function App() {
  const [todoData, setTodoData] = useState([])
  const [filterType, setFilterType] = useState('all')

  const count = useRef(1000)

  const addTask = (description, seconds) => {
    setTodoData((todos) => [
      ...todos,
      { id: count.current, description, seconds, created: new Date(Date.now()), completed: false },
    ])
    count.current += 1
  }

  const removeTask = (id) => {
    setTodoData((todos) => todos.filter((x) => x.id !== id))
  }

  const removeCompletedTasks = () => {
    setTodoData((todos) => todos.filter((x) => !x.completed))
  }

  const toggleComplete = (id) => {
    setTodoData((todos) => {
      const idx = todos.findIndex((x) => x.id === id)
      const newItem = { ...todos[idx] }
      newItem.completed = !newItem.completed
      return [...todos.slice(0, idx), newItem, ...todos.slice(idx + 1)]
    })
  }

  const changeSeconds = (id, seconds) => {
    setTodoData((todos) => {
      const idx = todos.findIndex((x) => x.id === id)
      const newItem = { ...todos[idx] }
      newItem.seconds = seconds
      return [...todos.slice(0, idx), newItem, ...todos.slice(idx + 1)]
    })
  }

  let todos = todoData
  const todoCount = todoData.filter((x) => !x.completed).length
  if (filterType === 'active') todos = todoData.filter((x) => !x.completed)
  if (filterType === 'completed') todos = todoData.filter((x) => x.completed)
  return (
    <section className="todoapp">
      <AppHeader addTask={addTask} />
      <section className="main">
        <TaskList todos={todos} removeTask={removeTask} toggleComplete={toggleComplete} changeSeconds={changeSeconds} />
        <Footer
          todoCount={todoCount}
          removeCompletedTasks={removeCompletedTasks}
          changeFilterType={setFilterType}
          filterType={filterType}
        />
      </section>
    </section>
  )
}

export default App
