import React, {Component} from "react";
import axios from "axios";
import "./MenuStyle.css";

export default class AdminDashBord extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <br/>
                <div
                    className="card mb-3 suvincard"
                    style={{width: "540px;"}}
                    onClick={() => {
                        window.location.href = "/displayUlist";
                    }}
                >
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img
                                src="https://media.istockphoto.com/photos/business-communication-network-concept-software-as-a-service-digital-picture-id1340845919?b=1&k=20&m=1340845919&s=612x612&w=0&h=9JoBGHE1116LWqdiilq-dlJXKzOk4U3Ah0D26xYln5A="
                                className="img-fluid rounded-start mainmenu"
                                alt="..."
                            />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">View All Users</h5>
                                <p className="card-text">
                                    View all users in the system including Students, Supervisors, Co-Supervisors
                                    andPanel Members. You can Update or Delete user from here.
                                </p>
                                <p className="card-text">
                                    <small className="text-muted">Click anywhere on the card</small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>
                <br/>

                <div
                    className="card mb-3 suvincard"
                    style={{width: "540px;"}}
                    onClick={() => {
                        window.location.href = "/regpanel";
                    }}
                >
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img
                                src="https://thumbs.dreamstime.com/b/job-interview-recruitment-process-new-team-member-company-recruit-candidate-215742767.jpg"
                                className="img-fluid rounded-start mainmenu"
                                alt="..."
                            />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Add Panel Members</h5>
                                <p className="card-text">
                                    Add Panel Members to the system. Panel Member registration happens through here.
                                </p>
                                <p className="card-text">
                                    <small className="text-muted">Click anywhere on the card</small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>
                <br/>

                <div
                    className="card mb-3 suvincard"
                    style={{width: "540px;"}}
                    onClick={() => {
                        window.location.href = "/panelmemallo";
                    }}
                >
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img
                                src="https://thumbs.dreamstime.com/b/employee-recruitment-concept-claw-picking-new-team-member-d-rendering-employee-recruitment-concept-claw-picking-new-212256278.jpg"
                                className="img-fluid rounded-start mainmenu"
                                alt="..."
                            />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Allocate Panel Members to Project Groups</h5>
                                <p className="card-text">
                                    After creating the student groups, Admin can allocate panel members to the rpoject
                                    groups and give unique group ID through here.
                                </p>
                                <p className="card-text">
                                    <small className="text-muted">Click anywhere on the card</small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>
                <br/>

                <div
                    className="card mb-3 suvincard"
                    style={{width: "540px;"}}
                    onClick={() => {
                        window.location.href = "/createsubmision";
                    }}
                >
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img
                                src="https://st3.depositphotos.com/1092019/14664/i/1600/depositphotos_146643223-stock-photo-article-submission-service-on-laptop.jpg"
                                className="img-fluid rounded-start mainmenu"
                                alt="..."
                            />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Create New Submissions</h5>
                                <p className="card-text">
                                    Create New Submission types from here. Submission types include: Presentations,
                                    Document Submission, Final Thesis, Topic Evaluation.
                                </p>
                                <p className="card-text">
                                    <small className="text-muted">Click anywhere on the card</small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>
                <br/>
                <div
                    className="card mb-3 suvincard"
                    style={{width: "540px;"}}
                    onClick={() => {
                        window.location.href = "/createMarking";
                    }}
                >
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img
                                src="https://www.bulldogbulletinonline.com/wp-content/uploads/2019/11/education_inequity_and_homework.jpg"
                                className="img-fluid rounded-start mainmenu"
                                alt="..."
                            />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Create New Marking Schemes</h5>
                                <p className="card-text">
                                    Create Marking Schemes for the Presentations and Document submissions, etc. Can
                                    choose any number of criteria.
                                </p>
                                <p className="card-text">
                                    <small className="text-muted">Click anywhere on the card</small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>
                <br/>
                <br/>
            </div>
        );
    }
}
