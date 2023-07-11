import React, { Component } from "react";
import axios from "axios";

class AcceptTopicSupervisor extends React.Component {
  constructor(props) {
    super(props);

    /*
     *setpanelMemberName() is a user ddefined function. React doesn't know about it.
     *so we need to bind that with library
     */
    this.setResearchTopic = this.setResearchTopic.bind(this);
    this.setSupervisorEmail = this.setSupervisorEmail.bind(this);
    this.setGroupId = this.setGroupId.bind(this);
    this.acceptResearchTopic = this.acceptResearchTopic.bind(this);

    this.state = {
      SupervisorEmail: "",
      ResearchTopic: "",
      GroupId: "",
    };
  }

  //user defined method, takes event input
  setSupervisorEmail(e) {
    this.setState({ SupervisorEmail: e.target.value });
  }

  setGroupId(e) {
    this.setState({ GroupId: e.target.value });
  }

  setResearchTopic(e) {
    this.setState({ ResearchTopic: e.target.value });
  }

  acceptResearchTopic(e) {
    console.log("ResearchTopic Data", this.state);

    const acceptResearchTopic = {
      allocatedSupervisor: this.state.SupervisorEmail,
      grpID: this.state.GroupId,
      topic: this.state.ResearchTopic,
    };

    //send data to backend
    //3 parameters: url of backend api, data to send and configurations(optional)
    axios
      .put("http://localhost:3001/api/projectGroup/updateTopicSup", acceptResearchTopic)
      .then(() => {
        alert("Accept Details are updated");
      })
      .catch((err) => {
        alert(err.message);
      });
  }
  //after submission, user will redirected here
  //window.location = '/';

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
                          Accept Topic{" "}
                        </p>

                        <form className="mx-1 mx-md-4">
                          <div>
                            <label className="form-label" for="form3Example3c">
                              Your Email
                            </label>
                            <input
                              type="text"
                              id="id2"
                              className="form-control"
                              value={this.state.SupervisorEmail}
                              onChange={this.setSupervisorEmail}
                              required
                            />
                            <div id="pn"></div>
                          </div>
                          <br />

                          <div>
                            <label className="form-label" for="form3Example3c">
                              Group ID
                            </label>
                            <input
                              type="text"
                              id="id3"
                              className="form-control"
                              value={this.state.GroupId}
                              onChange={this.setGroupId}
                              required
                            />
                            <div id="pn"></div>
                          </div>
                          <br />

                          <div>
                            <label className="form-label" for="form3Example3c">
                              Research Topic
                            </label>
                            <input
                              type="text"
                              id="id4"
                              className="form-control"
                              value={this.state.ResearchTopic}
                              onChange={this.setResearchTopic}
                              required
                            />
                            <div id="pn"></div>
                          </div>
                          <br />

                          <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                            <button
                              type="button"
                              className="btn btn-primary btn-lg"
                              onClick={this.acceptResearchTopic}
                            >
                              Accept
                            </button>
                          </div>
                        </form>
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
export default AcceptTopicSupervisor;
