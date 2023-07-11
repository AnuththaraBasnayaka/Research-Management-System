import React, { Component } from "react";
import axios from "axios";

class registerSupervisor extends React.Component {
  constructor(props) {
    super(props);

    /*
     *setSupervisorName() is a user ddefined function. React doesn't know about it.
     *so we need to bind that with library
     */
    this.setSupervisorfName = this.setSupervisorfName.bind(this);
    this.setSupervisorPhone = this.setSupervisorPhone.bind(this);
    this.setSupervisorEmail = this.setSupervisorEmail.bind(this);
    this.setSupervisorPassword = this.setSupervisorPassword.bind(this);
    this.setReasearchArea = this.setReasearchArea.bind(this);
    this.settitle = this.settitle.bind(this);

    this.saveSupervisorData = this.saveSupervisorData.bind(this);

    this.state = {
      fname: "",
      phone: "",
      email: "",
      passwords: "",
      title: "Co-Supervisor",
      Reaseacharea: "",
    };
  }

  //user defined method, takes event input
  setSupervisorfName(e) {
    this.setState({ fname: e.target.value });
  }

  setSupervisorPhone(e) {
    this.setState({ phone: e.target.value });
  }

  setSupervisorEmail(e) {
    this.setState({ email: e.target.value });
  }

  setSupervisorPassword(e) {
    this.setState({ passwords: e.target.value });
  }

  settitle(e) {
    this.setState({ title: e.target.value });
  }

  setReasearchArea(e) {
    this.setState({ Reaseacharea: e.target.value });
  }

  saveSupervisorData(e) {
    const Supervisor = {
      fullname: this.state.fname,
      pnum: this.state.phone,
      Email: this.state.email,
      password: this.state.passwords,
      title: this.state.title,
      researchArea: this.state.Reaseacharea,
    };

    //send data to backend
    //3 parameters: url of bkend api, data to send and configurations(optional)

    if (!this.state.fname) {
      document.getElementById("id1").className = "form-control is-invalid";
      document.getElementById("fr").innerHTML = "Name cannot be empty";
      document.getElementById("fr").className = "invalid-feedback";
    } else if (!this.state.phone) {
      document.getElementById("id4").className = "form-control is-invalid";
      document.getElementById("pn").innerHTML = " Mobile cannot be empty";
      document.getElementById("pn").className = "invalid-feedback";
    } else if (!this.state.email) {
      document.getElementById("id5").className = "form-control is-invalid";
      document.getElementById("em").innerHTML = " Enter valid email";
      document.getElementById("em").className = "invalid-feedback";
    } else if (!this.state.passwords) {
      document.getElementById("id6").className = "form-control is-invalid";
      document.getElementById("ps").innerHTML = "Password cannot be empty";
      document.getElementById("ps").className = "invalid-feedback";

      if (this.state.passwords.length < 8) {
        document.getElementById("id5").className = "form-control is-invalid";
        document.getElementById("ps").innerHTML =
          "Password should contain at least 8 characters";
        document.getElementById("ps").className = "invalid-feedback";
        return;
      }
    } else if (!this.state.Reaseacharea) {
      document.getElementById("id7").className = "form-control is-invalid";
      document.getElementById("ra").innerHTML = "Research area Cannot be Empty";
      document.getElementById("ra").className = "invalid-feedback";
    } else {
      console.log(Supervisor);
      axios
        .post("http://localhost:3001/api/supervisor/add", Supervisor)
        .then(() => {
          alert("Supervisor Data Successfuly Inserted");
          window.location="/"
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    //after submission, user will redirected here
    //window.location = '/';
  }

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
                          Supervisor Registration{" "}
                        </p>

                        <form className="mx-1 mx-md-4">
                          <div>
                            <label className="form-label" for="form3Example3c">
                              Full Name
                            </label>
                            <input
                              type="text"
                              id="id1"
                              className="form-control"
                              value={this.state.fname}
                              onChange={this.setSupervisorfName}
                              required
                            />
                            <div id="fr"></div>
                          </div>
                          <br />

                          <div>
                            <label className="form-label" for="form3Example3c">
                              Phone Number
                            </label>
                            <input
                              type="text"
                              id="id4"
                              className="form-control"
                              value={this.state.phone}
                              onChange={this.setSupervisorPhone}
                              required
                            />
                            <div id="pn"></div>
                          </div>
                          <br />

                          <div>
                            <label className="form-label" for="form3Example3c">
                              Email
                            </label>
                            <input
                              type="email"
                              id="id5"
                              className="form-control"
                              pattern=".+@globex\.com"
                              value={this.state.email}
                              onChange={this.setSupervisorEmail}
                              required
                            />
                            <div id="em"></div>
                          </div>
                          <br />

                          <div>
                            <label className="form-label" for="form3Example3c">
                              Reasearch Area
                            </label>
                            <input
                              type="text"
                              id="id7"
                              className="form-control"
                              value={this.state.Reaseacharea}
                              onChange={this.setReasearchArea}
                              required
                            />
                            <div id="ra"></div>
                          </div>
                          <br />

                          <div>
                            <label className="form-label" for="form3Example3c">
                              Password
                            </label>
                            <input
                              type="password"
                              id="id6"
                              className="form-control"
                              value={this.state.passwords}
                              onChange={this.setSupervisorPassword}
                              required
                            />
                            <div id="ps"></div>
                          </div>
                          <br />

                          <div onChange={this.settitle}>
                            <div class="form-check">
                              <input
                                class="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                                value="Supervisor"
                              />
                              <label
                                class="form-check-label"
                                for="flexRadioDefault1"
                              >
                                Supervisor
                              </label>
                            </div>
                            <div class="form-check">
                              <input
                                class="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault2"
                                value="Co-Supervisor"
                              />
                              <label
                                class="form-check-label"
                                for="flexRadioDefault2"
                              >
                                Co-Supervisor
                              </label>
                            </div>
                          </div>
                          <br />

                          <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                            <button
                              type="button"
                              className="btn btn-primary btn-lg"
                              onClick={this.saveSupervisorData}
                            >
                              Register
                            </button>
                          </div>
                        </form>
                      </div>
                      <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                        <img
                          src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-registration/draw1.png"
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
export default registerSupervisor;
