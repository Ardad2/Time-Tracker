import React from "react";
import { useSelector } from "react-redux";
import { selectTimer } from "../actions";
import timersReducer from "../reducers/timersReducer";

import TimerView from "./TimerView";

import "./ListTimers.css";

export default function ListTimers() {
  const timers = useSelector((state) => state.timers);

  return (
    <div className="TimerList">
      {timers.map((timer, i) => {
        return <TimerView key={`timer-${i}`} timer={timer} index={i} />;
      })}
    </div>
  );
}
