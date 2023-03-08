import React from 'react'
import PropTypes from 'prop-types'

import Task from '../task'

import './task-list.css'

function TaskList({ todos, removeTask, toggleComplete }) {
  return (
    <ul className="todo-list">
      {todos.map((todo) => {
        const classCompleted = todo.completed ? 'completed' : ''
        return (
          <li key={todo.id} className={classCompleted}>
            <Task
              id={todo.id}
              description={todo.description}
              created={todo.created}
              completed={todo.completed}
              removeTask={removeTask}
              toggleComplete={toggleComplete}
            />
          </li>
        )
      })}
    </ul>
  )
}

TaskList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      description: PropTypes.string,
      created: PropTypes.instanceOf(Date),
      completed: PropTypes.bool,
    })
  ).isRequired,
  removeTask: PropTypes.func.isRequired,
  toggleComplete: PropTypes.func.isRequired,
}

export default TaskList
