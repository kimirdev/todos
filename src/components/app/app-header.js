import React from 'react'
import PropTypes from 'prop-types'

import NewTaskForm from '../new-task-form'

function AppHeader({ addTask }) {
  return (
    <header className="header">
      <h1>todos</h1>
      <NewTaskForm addTask={addTask} />
    </header>
  )
}

AppHeader.propTypes = {
  addTask: PropTypes.func.isRequired,
}
export default AppHeader
