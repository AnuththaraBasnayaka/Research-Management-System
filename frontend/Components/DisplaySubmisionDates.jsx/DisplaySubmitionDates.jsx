import React, { Component } from "react";
import { Link, useParams, useHistory } from "react-router-dom";

import axios from "axios";

const Submition = (props) => {
  const url = "/fileupload/";

  return (
    <div>
      <br />
      <br />
      <hr style={{border:"1px solid"}}></hr>
      <h5>Submission : {props.submition.submissionName}</h5>

      <h6>Additional Details : {props.submition.additionalDetail}</h6>

      <h6>Template : <a href={`http://localhost:3001/file/${props.submition.templateName}`}>{props.submition.templateName}</a></h6>

      <p style={{ color: "red" }}>
        Deadline :{props.submition.deadline.toString().slice(0, 10)}
      </p>
      <Link to={url + props.submition.submissionName}>
        <button type="button" className="btn btn-primary btn-sm">
          Add submission
        </button>
      </Link>
      <hr style={{border:"1px solid"}}></hr>
      <br />
      <br />
    </div>
  );
};

class DisplaySubmition extends React.Component {
  constructor(props) {
    super(props);
    this.state = { Submition: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3001/api/submission/getAll")
      .then((res) => {
        //get all info about a student
        this.setState({ Submition: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  SubmitonList() {
    return this.state.Submition.map((currentsubmition) => {
      return <Submition submition={currentsubmition} />;
    });
  }

  render() {
    return (
      <div className="container">
        <br />
        <br />
        
        {this.SubmitonList()}
       
        <br />
        <br />
      </div>
    );
  }
}

export default DisplaySubmition;
