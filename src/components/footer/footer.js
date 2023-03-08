import React from 'react'
import PropTypes from 'prop-types'

import TasksFilter from '../task-filter'

import './footer.css'

function Footer({ todoCount, removeCompletedTasks, changeFilterType, filterType }) {
  return (
    <footer className="footer">
      <span className="todo-count">{todoCount} items left</span>
      <TasksFilter changeFilterType={changeFilterType} filterType={filterType} />
      <button type="button" className="clear-completed" onClick={removeCompletedTasks}>
        Clear completed
      </button>
    </footer>
  )
}

Footer.defaultProps = {
  filterType: 'all',
}
Footer.propTypes = {
  todoCount: PropTypes.number.isRequired,
  removeCompletedTasks: PropTypes.func.isRequired,
  changeFilterType: PropTypes.func.isRequired,
  filterType: PropTypes.oneOf(['all', 'active', 'completed']),
}

export default Footer
