import React, { Component } from "react";
import { useSelector } from "react-redux";
import { selectTimer } from "../actions";
import timersReducer from "../reducers/timersReducer";

import "./Day.css";
import ListTimers from "./ListTimers";
import NewTimer from "./NewTimer";
import TimerView from "./TimerView";

class Day extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  //  const timers = useSelector(state => state.timers)

  render() {
    return (
      <div className="Day">
        <h1>{this.state.date.toDateString()}</h1>
        <ListTimers />
      </div>
    );
  }
}

export default Day;
