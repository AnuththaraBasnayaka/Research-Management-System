import React, { Component, useState } from "react";
import axios from "axios";
import { Link, useParams, useHistory } from "react-router-dom";
import "./ViewDocument.css";

const url = "/feedback/"

class ViewDocs extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = {
      Documents: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3001/api/submission/getDocSubmissionPM")
      .then((res) => {
        //get all info about a supplier
        this.setState({ Documents: res.data });
        console.log(this.state.Documents);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    //const data=[this.state.props]
    const sp = this.state.Documents;
    console.log(sp);

    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Presentation
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="rtdocview">
                  Topic Evaluation
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <br />
        <div className="sawrap">
          {this.state.Documents.map((doc) => {
            if (doc.submissionType == "Presentations") {
              return (
                <div>
                  <div>
                    <div
                      className="card CScard"
                      style={{
                        width: "18rem",
                        marginLeft: "40px",
                        borderColor: "black",
                      }}
                    >
                      <div className="card-body">
                        <h5 className="card-title">Presentations</h5>
                        <hr style={{ border: "0.5px solid" }}></hr>
                        <p className="card-text">
                          <ul className="order">
                            <p>
                              Student :<b>{doc.author}</b>
                            </p>
                            <p>
                              Submition Date:
                              <b>{doc.submittedDate.slice(0, 10)}</b>
                            </p>
                            <p>
                              Group ID : <b>{doc.grpID}</b>
                            </p>
                          </ul>
                        </p>
                        <center>
                          <a href={`http://localhost:3001/file/${doc.fileName}`} className="btn btn-primary">Download</a><br/><br/>
                          <Link to={url +doc.author + "/Presentations"}>
                          <button  className="btn btn-primary">Give Feedback</button>
                          </Link>
                        </center>
                      </div>
                    </div>
                  </div>
                  <br />
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  }
}

export default ViewDocs;
