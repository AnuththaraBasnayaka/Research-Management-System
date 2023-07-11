import React, { Component, useState } from "react";
import axios from "axios";
import "./Allocatepannel.css";

function MemberList(props) {
  const [groupid, setgroupid] = useState("");
  const [panelmember, setpanelmember] = useState("");

  
  const addbutton=(e)=> {
    const Members = {
      id: props.memberlist._id,
      grpID: groupid,
      allocatedPM: panelmember,
    };

    axios
      .put("http://localhost:3001/api/projectGroup/updatePM_ID", Members)
      .then(() => {
        alert("Panel Member and Group ID Allocated");
      })
      .catch((err) => {
        alert(err.message);
      });

    console.log(Members)
  }

  return (
    <tr>
      <td className="csan">
        {props.memberlist.leader}
        <br />
        {props.memberlist.member2}
        <br />
        {props.memberlist.member3}
        <br />
        {props.memberlist.member4}
      </td>

      <td className="csan">
        <input
          type={"text"}
          className="form-control"
          placeholder="Group ID *"
          value={groupid}
          onChange={(e) => {
            setgroupid(e.target.value);
          }}
        />
      </td>
      <td className="csan">
      
        <div onChange={(e)=>{setpanelmember(e.target.value)}}>
          <select class="form-select" aria-label="Default select example">
          <option >Please Select..</option>
          {
            props.panel.map((pan)=>{
              return(<option value={pan.Email}>{pan.fullname}</option>)
            })
          }
            
          </select>
        </div>
      </td>
      <td className="csan">
        {/* <input
          type={"text"}
          className="form-control"
          placeholder="panel member Email *"
          value={panelmember}
          onChange={(e)=>{setpanelmember(e.target.value)}}
        /> */}
        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
          <button
            type="button"
            className="btn btn-primary btn-sm"
            onClick={addbutton}
          >
            Submit
          </button>
        </div>
      </td>
    </tr>
  );
}

export default class panelmemallocate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      MemberList: [],
      panel: [],
      groupid: "",
      panelallocate: "",
    };

    this.setgroupid = this.setgroupid.bind(this);
    this.setpannel = this.setpannel.bind(this);
    this.DisplayMemberList = this.DisplayMemberList.bind(this);
  }

  setgroupid(e) {
    this.setState({ groupid: e.target.value });
  }
  setpannel(e) {
    this.setState({ panelallocate: e.target.value });
  }


  componentDidMount() {
    axios
      .get("http://localhost:3001/api/projectGroup/getAll")
      .then((res) => {
        console.log(res.data);
        //get all info about groups
        this.setState({ MemberList: res.data });
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get("http://localhost:3001/api/panelmember/getAll")
      .then((res) => {
        //get all info about groups
        this.setState({ panel: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  DisplayMemberList() {
    return this.state.MemberList.map((currentmember) => {
      return <MemberList memberlist={currentmember} panel={this.state.panel} />;
    });
  }

  render() {
    return (
      <div className="container">
        <div>
          <br />
          <table class="membertable table table-hover">
            <thead className="thead-dark">
              <tr className="table-dark">
                <th className="csan" scope="col">
                  Students
                </th>
                <th className="csan" scope="col">
                  Group ID
                </th>
                <th className="csan" scope="col">
                  PanelMember allocation
                </th>
                <th className="csan" scope="col">
                  {" "}
                </th>
              </tr>
            </thead>
            <tbody>{this.DisplayMemberList()}</tbody>
          </table>
          <br />
          <br />
        </div>
      </div>
    );
  }
}
