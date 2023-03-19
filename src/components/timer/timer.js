import React, { useEffect, useRef, useState } from 'react'

function Timer({ id, seconds, changeSeconds }) {
  const [paused, setPaused] = useState(true)
  const [totalSecs, setTotalSecs] = useState(seconds)

  const intervalId = useRef()

  useEffect(() => () => clearInterval(intervalId.current), [])

  const togglePlayButton = () => {
    if (paused && totalSecs > 0) {
      intervalId.current = setInterval(() => {
        if (totalSecs < 1) {
          setPaused(true)
          setTotalSecs(0)
          changeSeconds(id, 0)
          clearInterval(intervalId.current)
          return
        }
        setTotalSecs((s) => s - 1)
      }, 1000)
    } else {
      changeSeconds(id, totalSecs)
      clearInterval(intervalId.current)
    }
    setPaused((s) => !s)
  }

  const mins = Math.floor(totalSecs / 60)
  const secs = totalSecs % 60

  return (
    <span className="description">
      <span>
        <button
          type="button"
          className={`icon icon-${paused ? 'play' : 'pause'}`}
          aria-label="play"
          onClick={togglePlayButton}
        />
        {`${mins.toLocaleString('en-US', { minimumIntegerDigits: 2 })}:` +
          `${secs.toLocaleString('en-US', { minimumIntegerDigits: 2 })}`}
      </span>
    </span>
  )
}

export default Timer
