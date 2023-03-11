import React from 'react'

class Timer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      intervalIdx: null,
      paused: true,
      totalSecs: props.seconds,
    }
  }

  componentWillUnmount() {
    const { intervalIdx } = this.state
    clearInterval(intervalIdx)
  }

  togglePlayButton = () => {
    const { paused, totalSecs, intervalIdx } = this.state
    const { id, changeSeconds } = this.props

    let iid

    if (paused && totalSecs > 0) {
      iid = setInterval(() => {
        const { totalSecs: sec } = this.state
        if (sec < 1) {
          clearInterval(intervalIdx)
          this.setState({ totalSecs: 0, paused: true, intervalIdx: null })
          changeSeconds(id, 0)
          return
        }
        this.setState((state) => ({ ...state, totalSecs: state.totalSecs - 1 }))
      }, 1000)
    } else {
      changeSeconds(id, totalSecs)
      clearInterval(intervalIdx)
      iid = null
    }
    this.setState((state) => ({ ...state, paused: !state.paused, intervalIdx: iid }))
  }

  render() {
    const { totalSecs, paused } = this.state
    const mins = Math.floor(totalSecs / 60)
    const secs = totalSecs % 60

    const button = paused ? (
      <button type="button" className="icon icon-play" aria-label="play" onClick={this.togglePlayButton} />
    ) : (
      <button type="button" className="icon icon-pause" aria-label="pause" onClick={this.togglePlayButton} />
    )
    return (
      <span className="description">
        <span>
          {button}
          {`${mins.toLocaleString('en-US', { minimumIntegerDigits: 2 })}:` +
            `${secs.toLocaleString('en-US', { minimumIntegerDigits: 2 })}`}
        </span>
      </span>
    )
  }
}

export default Timer
