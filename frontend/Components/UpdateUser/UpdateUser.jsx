import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import Supervisor from "../../../backend/models/supervisor.model";

function UpdateUser(props) {
  const { id, type } = useParams();
  //const{type} = useParams()
  const history = useHistory();
  const url = "/displayUlist";

  console.log(id, type);

  const [firstname, setfname] = useState();
  const [pnum, setpnum] = useState();
  const [Email, setEmail] = useState();
  const [password, setpassword] = useState();
  const [title, settitle] = useState();

  const radBtn = () => {
    if (type == "supervisor") {
      return (
        <div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
              value="Supervisor"
              checked={title=="Supervisor"}
              onChange={(e)=>{settitle(e.target.value)}}
            />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              Supervisor
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
              value="Co-Supervisor"
              checked={title=="Co-Supervisor"}
              onChange={(e)=>{settitle(e.target.value)}}
            />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              Co-Supervisor
            </label>
          </div>
        </div>
      );
    }
  };

  useEffect(() => {
    let getUser = () => {
      if (type == "student") {
        axios
          .get("http://localhost:3001/api/student/getById/" + id)
          .then((res) => {
            setfname(res.data.fullname);
            setpnum(res.data.pnum);
            setEmail(res.data.Email);
            setpassword(res.data.password);
          });
      } else if (type == "supervisor") {
        axios
          .get("http://localhost:3001/api/supervisor/getSupervisorById/" + id)
          .then((res) => {
            setfname(res.data.fullname);
            setpnum(res.data.pnum);
            setEmail(res.data.Email);
            setpassword(res.data.password);
            settitle(res.data.title);
          });
      } else if (type == "panelmember") {
        axios
          .get("http://localhost:3001/api/panelmember/getPanelMemberById/" + id)
          .then((res) => {
            setfname(res.data.fullname);
            setpnum(res.data.pnum);
            setEmail(res.data.Email);
            setpassword(res.data.password);
          });
      }
    };

    getUser();
  }, []);

  const update = (e) => {
    e.preventDefault();

    const updateUser = {
      pnum,
      Email,
      password,
      title,
    };

    if (type == "student") {
      axios
        .put(
          "http://localhost:3001/api/student/updateStudent/" + id,
          updateUser
        )
        .then(() => {
          alert("Student is updated successfully");
          history.push(url);
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (type == "supervisor") {
      axios
        .put(
          "http://localhost:3001/api/supervisor/updateSupervisor/" + id,
          updateUser
        )
        .then(() => {
          alert("Supervisor is updated successfully");
          history.push(url);
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (type == "panelmember") {
      axios
        .put(
          "http://localhost:3001/api/panelmember/updatePanelMember/" + id,
          updateUser
        )
        .then(() => {
          alert("Panel Member is updated successfully");
          history.push(url);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div>
      <section class="h-100 bg-dark">
        <form
          onSubmit={(e) => {
            update(e);
          }}
        >
          <div class="container py-5 h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
              <div class="col">
                <div class="card card-registration my-4">
                  <div class="row g-0">
                    <div class="col-xl-6 d-none d-xl-block">
                      <img
                        src="http://www.todaysmedicaldevelopments.com/fileuploads/publications/21/issues/103575/articles/images/AdobeStock_88779463_%5BConverted%5D_fmt.png"
                        alt="Sample photo"
                        class="img-fluid"
                        style={{
                          bordetopleftradius: ".15rem",
                          borderbottomleftradius: ".15rem",
                          height: "750px",
                        }}
                      />
                    </div>
                    <div class="col-xl-6">
                      <div class="card-body p-md-5 text-black">
                        <h3 class="mb-5 text-uppercase">Update User Details</h3>
                        <div class="form-outline mb-4">
                          <label class="form-label" for="form3Example97">
                            First Name
                          </label>
                          <input
                            type="text"
                            id="form3Example97"
                            class="form-control form-control-lg"
                            defaultValue={firstname}
                            onChange={(e) => {
                              setfname(e.target.value);
                            }}
                            disabled
                          />
                        </div>

                        <div class="form-outline mb-4">
                          <label class="form-label" for="form3Example97">
                            Phone Number
                          </label>
                          <input
                            type="text"
                            id="form3Example97"
                            class="form-control form-control-lg"
                            defaultValue={pnum}
                            onChange={(e) => {
                              setpnum(e.target.value);
                            }}
                          />
                        </div>

                        <div class="form-outline mb-4">
                          <label class="form-label" for="form3Example97">
                            Email
                          </label>
                          <input
                            type="email"
                            id="form3Example97"
                            class="form-control form-control-lg"
                            defaultValue={Email}
                            onChange={(e) => {
                              setEmail(e.target.value);
                            }}
                          />
                        </div>

                        <div class="form-outline mb-4">
                          <label class="form-label" for="form3Example97">
                            Password
                          </label>
                          <input
                            type="password"
                            id="form3Example97"
                            class="form-control form-control-lg"
                            defaultValue={password}
                            onChange={(e) => {
                              setpassword(e.target.value);
                            }}
                          />
                        </div>
                        {radBtn()}

                        <div class="d-flex justify-content-end pt-3">
                          <button
                            type="submit"
                            class="btn btn-warning btn-lg ms-2"
                          >
                            Update
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
}

export default UpdateUser;
