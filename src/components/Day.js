import React, { Component } from "react";


import './Day.css'
import ListTimers from './ListTimers'
import NewTimer from './NewTimer'

class Day extends Component {
    constructor(props)
    {
        super(props);
    this.state = { date: new Date()}
    }

    render() { 
        return ( <div className="Day">

<h1>{this.state.date.toDateString()}</h1>
<NewTimer />
      <ListTimers />

        </div> 
        );
    }
}
 
export default Day;