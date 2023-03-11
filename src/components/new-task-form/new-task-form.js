import React from 'react'
import PropTypes from 'prop-types'
import './new-task-form.css'

class NewTaskForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inputVal: '',
      seconds: '',
      minutes: '',
    }
  }

  onInputChange = (e) => {
    this.setState({ inputVal: e.currentTarget.value })
  }

  onMinutesChange = (e) => {
    this.setState({ minutes: e.currentTarget.value })
  }

  onSecondsChange = (e) => {
    this.setState({ seconds: e.currentTarget.value })
  }

  onFormSubmit = (e) => {
    const { addTask } = this.props
    const { inputVal, seconds, minutes } = this.state
    e.preventDefault()
    if (inputVal === '') return
    addTask(inputVal, Number(minutes) * 60 + Number(seconds))
    this.setState({ inputVal: '', seconds: '', minutes: '' })
  }

  render() {
    const { inputVal, seconds, minutes } = this.state
    return (
      <form onSubmit={this.onFormSubmit} style={{ display: 'flex' }}>
        <input className="new-todo" placeholder="Task" onChange={this.onInputChange} value={inputVal} />
        <input className="new-todo" type="number" placeholder="Min" onChange={this.onMinutesChange} value={minutes} />
        <input className="new-todo" type="number" placeholder="Sec" onChange={this.onSecondsChange} value={seconds} />
        <button type="submit" aria-label="submit" />
      </form>
    )
  }
}

NewTaskForm.propTypes = {
  addTask: PropTypes.func.isRequired,
}

export default NewTaskForm
