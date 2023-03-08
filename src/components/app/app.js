import React from 'react'

import TaskList from '../task-list'
import Footer from '../footer'

import AppHeader from './app-header'

import './app.css'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todoData: [],
      filterType: 'all',
    }
    this.count = 1000
    this.addTask = this.addTask.bind(this)
    this.changeFilterType.bind(this)
  }

  addTask = (description) => {
    this.setState((state) => ({
      todoData: [...state.todoData, { id: this.count, description, created: new Date(Date.now()), completed: false }],
    }))
    this.count += 1
  }

  removeTask = (id) => {
    this.setState((state) => ({ ...state, todoData: state.todoData.filter((x) => x.id !== id) }))
  }

  removeCompletedTasks = () => {
    this.setState((state) => ({ ...state, todoData: state.todoData.filter((x) => !x.completed) }))
  }

  toggleComplete = (id) => {
    this.setState((oldState) => {
      const idx = oldState.todoData.findIndex((x) => x.id === id)
      const newItem = { ...oldState.todoData[idx] }
      newItem.completed = !newItem.completed
      return {
        ...oldState,
        todoData: [...oldState.todoData.slice(0, idx), newItem, ...oldState.todoData.slice(idx + 1)],
      }
    })
  }

  changeFilterType = (type) => {
    this.setState((state) => ({ ...state, filterType: type }))
  }

  render() {
    let { todoData } = this.state
    const { filterType } = this.state
    const todoCount = todoData.filter((x) => !x.completed).length
    if (filterType === 'active') todoData = todoData.filter((x) => !x.completed)
    if (filterType === 'completed') todoData = todoData.filter((x) => x.completed)
    return (
      <section className="todoapp">
        <AppHeader addTask={this.addTask} />
        <section className="main">
          <TaskList todos={todoData} removeTask={this.removeTask} toggleComplete={this.toggleComplete} />
          <Footer
            todoCount={todoCount}
            removeCompletedTasks={this.removeCompletedTasks}
            changeFilterType={this.changeFilterType}
            filterType={filterType}
          />
        </section>
      </section>
    )
  }
}
