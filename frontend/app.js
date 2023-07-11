import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
//import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import AboutUs from "./Components/AboutUs/AboutUs";
import Hcontent from "./Components/HomeContent/Hcontent";
import NavBar from "./Components/NavBar/NavBar";
import Logins from "./Components/Home/Login";
import Userlist from "./Components/DisplayUsers/DisplayUsers";
import registerstudent from "./Components/Register/RegStudent";
import registerSupervisor from "./Components/Register/RegSupervisor";
import registerpanelMember from "./Components/Register/RegPanelmember";
import panelmemallocate from "./Components/PanelMemberAllocation/Allocatepanel";
import UpdateUser from "./Components/UpdateUser/UpdateUser";
import createStudentGroups from "./Components/CreateGroups/CreateGroup";
import DashBord from "./Components/StudentDashBord/StudentDashbord";
import SupervisorSelection from "./Components/SelectSupervisor/SupervisorSelection";
import AcceptTopicSupervisor from "./Components/AcceptTopicSupervisor/AcceptTopicSupervisor";
import Createsubmision from "./Components/CreateSubmisions/Createsubmisions";
import DisplaySubmition from "./Components/DisplaySubmisionDates.jsx/DisplaySubmitionDates";
import ViewDocs from "./Components/PanelPresentationDocView/ViewDocument";
import RTViewDocs from "./Components/PanelResearchTopicDocV/RDocView";
import FileUpload from "./Components/FileUpload/FileUpload";
import Feedback from "./Components/PanelMemberFeedback/FeedBack";
import SupervisorDashBord from "./Components/SupervisorDashbord/SupervisorDashbord";
import PanelmemDashBord from "./Components/PanelMemDashBoard/PanelMemDashbord";
import MarkingSchema from "./Components/PanelViewMarkingSchem/ViewMarkingSchem";
import SupMarkingSchema from "./Components/SupViewMarkingShem/SupervisorMarkingShem";
import AdminDashBord from "./Components/AdminDashbord/Admindashbord";
import DownloadDocs from "./Components/SubmisionsDownload/DownloadSubmitions";
import EmailToPanel from "./Components/SendEmailToPanelMember/EmailtoPanel";
import Em from "./Components/Email/Em";
import CreateMarkingScheme from "./Components/CreateMarkingScheme/CreateMarkingScheme";

function App() {
  return (
    <Router>
      <switch>
        <Route path="/" component={Header} />
        <Route path="/" component={NavBar} />
        <Route path="/aboutUs" exact component={AboutUs} />
        <Route path="/" exact component={Hcontent} />
        <Route path="/" exact component={Logins} />
        <Route path="/displayUlist" exact component={Userlist} />
        <Route path="/regstudent" exact component={registerstudent} />
        <Route path="/regsupervisor" exact component={registerSupervisor} />
        <Route path="/regpanel" exact component={registerpanelMember} />
        <Route path="/panelmemallo" exact component={panelmemallocate} />
        <Route path="/updateuser/:id/:type" exact component={UpdateUser} />
        <Route path="/createstdgrp" exact component={createStudentGroups} />
        <Route path="/dashbord" exact component={DashBord} />
        <Route path="/accepttopicsup" exact component={AcceptTopicSupervisor} />
        <Route path="/selectsupervisor" exact component={SupervisorSelection} />
        <Route path="/createsubmision" exact component={Createsubmision} />
        <Route path="/displaysub" exact component={DisplaySubmition} />
        <Route path="/fileupload/:subname" exact component={FileUpload} />
        <Route path="/em/:email" component={Em} />
        <Route path="/topiceval" component={RTViewDocs} />
        <Route path="/docview" component={ViewDocs} />
        <Route path="/feedback/:email/:type" component={Feedback} />
        <Route path="/superviserDashBrd" component={SupervisorDashBord} />
        <Route path="/panelDashBrd" component={PanelmemDashBord} />
        <Route path="/adminDashBrd" component={AdminDashBord} />
        <Route path="/createMarking" component={CreateMarkingScheme}/>
        <Route path="/supmarkingschem" component={SupMarkingSchema}/>
        <Route path="/markingshechem" component={MarkingSchema} />
        <Route path="/downloaddoc" component={DownloadDocs} />
        <Route path="/emailtopanel/:email/:password" component={EmailToPanel} />
        <Route path="/" component={Footer} />
       
      </switch>
    </Router>
  );
}

export default App;
