import React, {  } from 'react'
import { useDispatch } from 'react-redux'

import { toggleTimer } from '../actions'

import { formatTime } from '../utils';

import './TimerView.css'

export default function TimerView(props) {

  const { index, timer } = props
  const dispatch = useDispatch()

  return (
    <div className="TimerView">
      <h2>{timer.name}</h2>
      <h1>{formatTime(timer.time)}</h1>
      <button className="btn btn-primary btn-sm m-2" 
        onClick={() => dispatch(toggleTimer(index))}
      >
        {timer.isRunning ? "Stop" : "Start"}
      </button>
    </div>
  )
}