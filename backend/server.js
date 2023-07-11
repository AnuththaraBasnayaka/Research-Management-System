const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
 
app.use(cors());
app.use(express.json());

mongoose
    .connect(
        "mongodb+srv://AFProject:af123@cluster0.adk757k.mongodb.net/?retryWrites=true&w=majority"
    )
    .then(() => {
        console.log("Mongo DB Connected");
    }).catch(err=>[
    console.log(err)
]);

const upload = require('./routes/upload.routes');
app.use("/file", upload);

const panelMemberRoutes = require('./routes/panelMember.routes');
app.use("/api/panelmember", panelMemberRoutes);

const studentRoutes = require('./routes/student.routes');
app.use("/api/student", studentRoutes);

const supervisorRoutes = require('./routes/supervisor.routes');
app.use('/api/supervisor', supervisorRoutes);

const projectGroupRoutes = require('./routes/projectGroup.routes');
app.use('/api/projectGroup', projectGroupRoutes);

const submissionRoutes = require('./routes/submission.Routes');
app.use('/api/submission', submissionRoutes);

const markingSchemeRoutes = require('./routes/markingScheme.routes');
app.use('/api/markingScheme', markingSchemeRoutes);

app.listen(3001, () => {
    console.log("Server is Running");
});
