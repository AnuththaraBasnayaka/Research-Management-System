import React, { useState } from "react";
import axios from "axios";

import "./CrMrSc.css";

function CreateMarkingScheme() {
  const [inputList, setInputList] = useState([
    { markedArea: "", marksOutOf: "" },
  ]);

  const [submissionType, setSubmissionType] = useState("");
  const [markingSchema, setMarkingSchema] = useState([]);

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    console.log(value);

    const list = [...inputList];
    list[index][name] = value;

    setInputList(list);
    setMarkingSchema(list);
  };

  const handleAddInput = () => {
    setInputList([...inputList, { markedArea: "", marksOutOf: "" }]);
  };

  const handleRemoveInput = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      submissionType,
      markingCriteria: markingSchema,
    };

    console.log(data);

    axios
      .post("http://localhost:3001/api/markingScheme/add", data)
      .then(() => {
        alert("Added Marking Scheme Successfully");
        window.location = "/";
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div>
      <br />
      <div class="container register">
        <div class="row">
          <div class="col-md-3 register-left">
            <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
            <h3>Marking Scheme Creation</h3>
            <p>Create Marking Schemes at Ease !</p>

            <br />
          </div>
          <div class="col-md-9 register-right">
            <ul class="nav nav-tabs nav-justified" id="myTab" role="tablist">
              <li class="nav-item">
                <a
                  class="nav-link active"
                  id="home-tab"
                  data-toggle="tab"
                  href="#home"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                >
                  SCAD
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  id="profile-tab"
                  data-toggle="tab"
                  href="#profile"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  RPMS
                </a>
              </li>
            </ul>
            <div class="tab-content" id="myTabContent">
              <h3 class="register-heading">Create Marking Scheme</h3>
              <form onSubmit={handleSubmit}>
                <div class="register-form">
                  <div class="col-md-12">
                    <div class="form-group">
                      <div>
                        <label className="form-label" for="form3Example3c">
                          Submition Name
                        </label>

                        <div
                          onChange={(e) => {
                            setSubmissionType(e.target.value);
                          }}
                        >
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                              value="Presentations"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexRadioDefault1"
                            >
                              Presentations
                            </label>
                          </div>

                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault2"
                              value="Topic Evaluation"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexRadioDefault2"
                            >
                              Topic Evaluation
                            </label>
                          </div>

                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault3"
                              value="Final Thesis"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexRadioDefault3"
                            >
                              Final Thesis
                            </label>
                          </div>

                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault4"
                              value="Document Submission"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexRadioDefault4"
                            >
                              Document Submission
                            </label>
                          </div>
                        </div>
                      </div>
                      <br />
                    </div>
                    <br />
                  </div>
                  <div class="col-md-12">
                    {inputList.map((item, i) => {
                      return (
                        <div key={i}>
                          <div class="form-group">
                            <div className="row">
                              <div className="col">
                                <input
                                  type="text"
                                  class="form-control"
                                  name="markedArea"
                                  placeholder="Enter Evaluated Area"
                                  value={item.markedArea}
                                  onChange={(e) => handleChange(e, i)}
                                  required
                                />
                              </div>
                              <div className="col">
                                <input
                                  type="text"
                                  className="form-control"
                                  name="marksOutOf"
                                  placeholder="Marks Given From"
                                  value={item.marksOutOf}
                                  onChange={(e) => handleChange(e, i)}
                                  required
                                />
                              </div>
                            </div>
                            {inputList.length - 1 === i && (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                onClick={handleAddInput}
                                width="20"
                                height="20"
                                style={{ margin: "8px" }}
                                fill="currentColor"
                                class="bi bi-plus-circle add-rem"
                                viewBox="0 0 16 16"
                              >
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                              </svg>
                            )}
                            {inputList.length !== 1 && (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                onClick={() => handleRemoveInput(i)}
                                width="20"
                                height="20"
                                style={{ margin: "8px" }}
                                fill="currentColor"
                                class="bi bi-dash-circle add-rem"
                                viewBox="0 0 16 16"
                              >
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                              </svg>
                            )}
                          </div>
                          <br />
                        </div>
                      );
                    })}

                    <input
                      type="submit"
                      class="btnRegister"
                      value="ADD"
                      style={{ margin: "20px" }}
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}

export default CreateMarkingScheme;
