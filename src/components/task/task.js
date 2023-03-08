import React from 'react'
import './task.css'
import { formatDistanceToNow } from 'date-fns'
import PropTypes from 'prop-types'

function Task({ id, description, created, completed, removeTask, toggleComplete }) {
  // const handleKeyDown = (e) => {
  //   if (e.repeat) return
  //   if (e.code === 'Space') toggleComplete(id)
  // }

  return (
    <div className="view">
      <input
        className="toggle"
        type="checkbox"
        onChange={() => toggleComplete(id)}
        checked={completed}
        onKeyDown={() => {}}
      />
      <div className="label">
        <span className="description">{description}</span>
        <span className="created">created {formatDistanceToNow(created, { addSuffix: true })}</span>
      </div>
      {/* <button className="icon icon-edit"></button> */}
      <button type="button" className="icon icon-destroy" aria-label="remove" onClick={() => removeTask(id)} />
    </div>
  )
}

Task.propTypes = {
  id: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  created: PropTypes.instanceOf(Date).isRequired,
  completed: PropTypes.bool.isRequired,
  removeTask: PropTypes.func.isRequired,
  toggleComplete: PropTypes.func.isRequired,
}

export default Task
