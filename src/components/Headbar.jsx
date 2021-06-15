import React, { Component } from "react";

class Headbar extends Component {
  render() {
    return (
      <nav class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
        <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">
          <h1>
            <center></center>
          </h1>
        </a>
        <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">
          <h1>
            <center>{new Date().toDateString()} </center>
          </h1>
        </a>
        <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">
          <h1>
            <center></center>
          </h1>
        </a>
      </nav>
    );
  }
}

export default Headbar;
