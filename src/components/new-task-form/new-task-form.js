import React from 'react'
import PropTypes from 'prop-types'
import './new-task-form.css'

class NewTaskForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inputVal: '',
    }
  }

  onInputChange = (e) => {
    this.setState({ inputVal: e.currentTarget.value })
  }

  onFormSubmit = (e) => {
    const { addTask } = this.props
    const { inputVal } = this.state
    e.preventDefault()
    if (inputVal === '') return
    addTask(inputVal)
    this.setState({ inputVal: '' })
  }

  render() {
    const { inputVal } = this.state
    return (
      <form onSubmit={this.onFormSubmit}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          onChange={this.onInputChange}
          value={inputVal}
        />
      </form>
    )
  }
}

NewTaskForm.propTypes = {
  addTask: PropTypes.func.isRequired,
}

export default NewTaskForm
