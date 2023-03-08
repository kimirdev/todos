import React from 'react'
import './tasks-filter.css'
import PropTypes from 'prop-types'

function TasksFilter({ changeFilterType, filterType }) {
  return (
    <ul className="filters">
      <li key="all">
        <button
          type="button"
          className={filterType === 'all' ? 'selected' : ''}
          onClick={() => changeFilterType('all')}
        >
          All
        </button>
      </li>
      <li key="active">
        <button
          type="button"
          className={filterType === 'active' ? 'selected' : ''}
          onClick={() => changeFilterType('active')}
        >
          Active
        </button>
      </li>
      <li key="completed">
        <button
          type="button"
          className={filterType === 'completed' ? 'selected' : ''}
          onClick={() => changeFilterType('completed')}
        >
          Completed
        </button>
      </li>
    </ul>
  )
}

TasksFilter.defaultProps = {
  filterType: 'all',
}

TasksFilter.propTypes = {
  changeFilterType: PropTypes.func.isRequired,
  filterType: PropTypes.oneOf(['all', 'completed', 'active']),
}

export default TasksFilter
