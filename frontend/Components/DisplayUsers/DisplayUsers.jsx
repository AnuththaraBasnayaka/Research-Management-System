import React, { Component } from "react";
import { Link, useParams, useHistory } from "react-router-dom";

import "./DisplayUser.css";
import axios from "axios";

const Student = (props) => {
  function Delete(_id) {
    var result1 = window.confirm("Confirm to delete this Student");
    if (result1 == true) {
      axios
        .delete("http://localhost:3001/api/student/delete/" + _id)
        .then(() => {
          alert("Student deleted successfully");
          window.location ="/displayUlist"
        })
        .catch((err) => {
          alert(err.message);
        });
    }
  }

  const { _id } = useParams();
  const url = "/updateuser/";

  const data = [props];

  return (
    <tr>
      <td className="csan">{props.student.fullname}</td>
      <td className="csan">{props.student.pnum}</td>
      <td className="csan">{props.student.Email}</td>

      <td className="csan">
        {data.map((upstudent) => (
          <Link to={url + props.student._id + "/student"}>
            <button
              type="button"
              className="btn btn-primary"
              style={{ marginRight: "20px" }}
            >
              Update
            </button>
          </Link>
        ))}

        <button
          type="button"
          className="btn btn-primary"
          style={{ backgroundColor: "gray" }}
          onClick={(e) => {
            Delete(props.student._id);
          }}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

//................................................................................................

const Supervisor = (props) => {
  function Delete(_id) {
    var result2 = window.confirm("Confirm to delete this supervisor");
    if (result2 == true) {
      axios
        .delete("http://localhost:3001/api/supervisor/delete/" + _id)
        .then(() => {
          alert("Supervisor deleted successfully");
          window.location ="/displayUlist"
        })
        .catch((err) => {
          alert(err.message);
        });
    }
  }

  const { _id } = useParams();
  const url = "/updateuser/";

  const data = [props];

  return (
    <tr>
      <td className="csan">{props.supervisor.fullname}</td>
      <td className="csan">{props.supervisor.pnum}</td>
      <td className="csan">{props.supervisor.Email}</td>

      <td className="csan">
        {data.map((upsupervisor) => (
          <Link to={url + props.supervisor._id + "/supervisor"}>
            <button
              type="button"
              className="btn btn-primary"
              style={{ marginRight: "20px" }}
            >
              Update
            </button>
          </Link>
        ))}

        <button
          type="button"
          className="btn btn-primary"
          style={{ backgroundColor: "gray" }}
          onClick={(e) => {
            Delete(props.supervisor._id);
          }}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

//................................................................................................

const Panelmember = (props) => {
  function Delete(_id) {
    var result3 = window.confirm("Confirm to delete this Panel Member");
    if (result3 == true) {
      axios
        .delete("http://localhost:3001/api/panelmember/delete/" + _id)
        .then(() => {
          alert("Panel Member deleted successfully");
          window.location ="/displayUlist"
        })
        .catch((err) => {
          alert(err.message);
        });
    }
  }

  const { _id } = useParams();
  const url = "/updateuser/";

  const data = [props];

  return (
    <tr>
      <td className="csan">{props.panelmember.fullname}</td>
      <td className="csan">{props.panelmember.pnum}</td>
      <td className="csan">{props.panelmember.Email}</td>

      <td className="csan">
        {data.map((uppanelmember) => (
          <Link to={url + props.panelmember._id + "/panelmember"}>
            <button
              type="button"
              className="btn btn-primary"
              style={{ marginRight: "20px" }}
            >
              Update
            </button>
          </Link>
        ))}

        <button
          type="button"
          className="btn btn-primary"
          style={{ backgroundColor: "gray" }}
          onClick={(e) => {
            Delete(props.panelmember._id);
          }}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

class Userlist extends React.Component {
  constructor(props) {
    super(props);
    this.state = { Student: [], Supervisor: [], Panelmember: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3001/api/student/getAll")
      .then((res) => {
        //get all info about a student
        this.setState({ Student: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get("http://localhost:3001/api/supervisor/getAll")
      .then((res) => {
        console.log(res.data);
        //get all info about a supervisor
        this.setState({ Supervisor: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get("http://localhost:3001/api/panelmember/getAll")
      .then((res) => {
        //get all info about a panelmember
        this.setState({ Panelmember: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  StudentList() {
    return this.state.Student.map((currentstudent) => {
      return <Student student={currentstudent} />;
    });
  }

  SupervisorList() {
    return this.state.Supervisor.map((currentsupervisor) => {
      return <Supervisor supervisor={currentsupervisor} />;
    });
  }

  PanelmemberList() {
    return this.state.Panelmember.map((currentPanelmember) => {
      return <Panelmember panelmember={currentPanelmember} />;
    });
  }

  render() {
    return (
      <div>
        <br />
        <br />
        <table class="chamoditable table table-hover">
          <thead className="thead-dark">
            <tr className="table-dark">
              <th className="csan" scope="col">
                User's Name
              </th>
              <th className="csan" scope="col">
                Phone Number
              </th>
              <th className="csan" scope="col">
                Email Address
              </th>
              <th className="csan" scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <h5 >------Student-----</h5>
            {this.StudentList()}
            <h5>-----Supervisor-----</h5>
            {this.SupervisorList()}
            <h5>-----Panel Member------</h5>
            {this.PanelmemberList()}
          </tbody>
        </table>
        <br />
        <br />
      </div>
    );
  }
}

export default Userlist;
