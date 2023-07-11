import React, { Component } from "react";
import axios from "axios";
import "../StudentDashBord/StudentDashbord.css";

class SupervisorDashBord extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <br />
        <div className="d-grid gap-3">
          <a
            href="/accepttopicsup"
            className="btn btn-secondary btn-lg btn-block"
            role="button"
            aria-pressed="true"
          >
            Topic Acceptance
          </a>
          <a
            href="/downloaddoc"
            className="btn btn-secondary btn-lg btn-block"
            role="button"
            aria-pressed="true"
          >
            Doccument Submission
          </a>
          <a
            href="/supmarkingschem"
            className="btn btn-secondary btn-lg btn-block"
            role="button"
            aria-pressed="true"
          >
            View marking Scheme
          </a>
        </div>
        <br />
      </div>
    );
  }
}
export default SupervisorDashBord;
