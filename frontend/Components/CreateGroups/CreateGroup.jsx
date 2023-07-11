import React, { Component } from "react";
import axios from "axios";

class createStudentGroups extends React.Component {
  constructor(props) {
    super(props);

    /*
     *setpanelMemberName() is a user ddefined function. React doesn't know about it.
     *so we need to bind that with library
     */
    this.setMemberone = this.setMemberone.bind(this);
    this.setMembertwo = this.setMembertwo.bind(this);
    this.setMemberthree = this.setMemberthree.bind(this);
    this.setMemberfour = this.setMemberfour.bind(this);
    this.saveMemberGroup = this.saveMemberGroup.bind(this);

    this.state = {
      memberone: "",
      membertwo: "",
      memberthree: "",
      memberfour: "",
    };
  }

  //user defined method, takes event input
  setMemberone(e) {
    this.setState({ memberone: e.target.value });
  }

  setMembertwo(e) {
    this.setState({ membertwo: e.target.value });
  }

  setMemberthree(e) {
    this.setState({ memberthree: e.target.value });
  }

  setMemberfour(e) {
    this.setState({ memberfour: e.target.value });
  }

  saveMemberGroup(e) {
    console.log("MemberGroup Data", this.state);

    const GroupMember = {
      leader: this.state.memberone,
      member2: this.state.membertwo,
      member3: this.state.memberthree,
      member4: this.state.memberfour,
    };

    //send data to backend
    //3 parameters: url of backend api, data to send and configurations(optional)

    //       if(!this.state.memberone) {
    //           document.getElementById("id1").className = "form-control is-invalid";
    //           document.getElementById("fr").innerHTML = " Enter valid E-mail";
    //           document.getElementById("fr").className = "invalid-feedback";
    //       }

    //     else if(!this.state.membertwo) {
    //       document.getElementById("id2").className = "form-control is-invalid";
    //       document.getElementById("pn").innerHTML = " Enter valid E-mail";
    //       document.getElementById("pn").className = "invalid-feedback";
    //   }

    //   else if(!this.state.memberthree) {
    //     document.getElementById("id3").className = "form-control is-invalid";
    //     document.getElementById("em").innerHTML = " Enter valid E-mail";
    //     document.getElementById("em").className = "invalid-feedback";
    //   }

    //     else if(!this.state.memberfour) {
    //       document.getElementById("id4").className = "form-control is-invalid";
    //       document.getElementById("ps").innerHTML = " Enter valid E-mail";
    //       document.getElementById("ps").className = "invalid-feedback";
    //     }

    //   else{
    axios
      .post("http://localhost:3001/api/projectGroup/add", GroupMember)
      .then(() => {
        alert("Member Data Successfuly Inserted");
      })
      .catch((err) => {
        alert(err.message);
      });

    e.preventDefault();
  }
  //after submission, user will redirected here
  //window.location = '/';
  //}

  render() {
    return (
      <div>
        <br />
        <br />
        <section className="vh-50" style={{ backgroundcolor: "#eee" }}>
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-lg-12 col-xl-11">
                <div
                  className="card text-black"
                  style={{ borderradius: "25px" }}
                >
                  <div className="card-body p-md-5">
                    <div className="row justify-content-center">
                      <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                          Group Registration{" "}
                        </p>
                        <form className="mx-1 mx-md-4">
                          <div>
                            {/* <label className="form-label" for="form3Example3c">
                              Leader Email
                            </label> */}
                            <input
                              type="text"
                              id="id1"
                              placeholder=" Leaders' Email *"
                              className="form-control"
                              value={this.state.memberone}
                              onChange={this.setMemberone}
                              required
                            />
                            <br />
                            <div id="fr"></div>
                          </div>

                          <div>
                            {/* <label className="form-label" for="form3Example3c">
                              Member02 Email
                            </label> */}
                            <input
                              type="text"
                              id="id2"
                              placeholder=" Member02 Email *"
                              className="form-control"
                              value={this.state.membertwo}
                              onChange={this.setMembertwo}
                              required
                            />
                            <br />
                            <div id="pn"></div>
                          </div>

                          <div>
                            {/* <label className="form-label" for="form3Example3c">
                              member03 Email
                            </label> */}
                            <input
                              type="text"
                              id="id3"
                              placeholder=" Member03 Email *"
                              className="form-control"
                              value={this.state.memberthree}
                              onChange={this.setMemberthree}
                              required
                            />
                            <br />
                            <div id="em"></div>
                          </div>

                          <div>
                            {/* <label className="form-label" for="form3Example3c">
                              Member04 Email
                            </label> */}
                            <input
                              type="text"
                              id="id4"
                              placeholder=" Member04 Email *"
                              className="form-control"
                              value={this.state.memberfour}
                              onChange={this.setMemberfour}
                              required
                            />
                            <br />
                            <div id="ps"></div>
                          </div>
                          <br />

                          <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                            <button
                              type="submit"
                              className="btn btn-primary btn-lg"
                              onClick={this.saveMemberGroup}
                            >
                              Create
                            </button>
                          </div>
                        </form>
                      </div>
                      <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                        <img
                          src="https://headerbidding.co/wp-content/uploads/2017/11/How-to-create-Ads.txt-file-1260x500.png"
                          class="img-fluid"
                          alt="Sample image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <br />
        <br />
      </div>
    );
  }
}
export default createStudentGroups;
