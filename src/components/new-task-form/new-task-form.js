import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './new-task-form.css'

function NewTaskForm({ addTask }) {
  const [inputVal, setInputVal] = useState('')
  const [seconds, setSeconds] = useState('')
  const [minutes, setMinutes] = useState('')

  const onFormSubmit = (e) => {
    e.preventDefault()
    if (inputVal === '') return
    addTask(inputVal, Number(minutes) * 60 + Number(seconds))
    setInputVal('')
    setMinutes('')
    setSeconds('')
  }

  return (
    <form onSubmit={onFormSubmit} style={{ display: 'flex' }}>
      <input
        className="new-todo"
        placeholder="Task"
        onChange={(e) => setInputVal(e.currentTarget.value)}
        value={inputVal}
      />
      <input
        className="new-todo"
        type="number"
        placeholder="Min"
        onChange={(e) => setMinutes(e.currentTarget.value)}
        value={minutes}
      />
      <input
        className="new-todo"
        type="number"
        placeholder="Sec"
        onChange={(e) => setSeconds(e.currentTarget.value)}
        value={seconds}
      />
      <button type="submit" aria-label="submit" />
    </form>
  )
}

NewTaskForm.propTypes = {
  addTask: PropTypes.func.isRequired,
}

export default NewTaskForm
