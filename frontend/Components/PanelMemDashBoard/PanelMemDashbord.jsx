import React, { Component } from "react";
import axios from "axios";
import "../StudentDashBord/StudentDashbord.css";

class PanelmemDashBord extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <br />
        <div className="d-grid gap-3">
          <a
            href="/docview"
            className="btn btn-secondary btn-lg btn-block"
            role="button"
            aria-pressed="true"
          >
            View Submissions
          </a>
          <a
            href="/markingshechem"
            className="btn btn-secondary btn-lg btn-block"
            role="button"
            aria-pressed="true"
          >
            View Marking Scheme
          </a>
        </div>
        <br />
      </div>
    );
  }
}
export default PanelmemDashBord;
