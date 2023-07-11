const mongoose = require('mongoose');
const cors = require('cors');

const { Schema }= mongoose;

const newDocSubmissionSchema = new Schema({
    author:String,
    submittedDate:Date,
    grpID:String,
    fileName:String,
    submissionType:String
});

const DocSubmission = mongoose.model("DocSubmission", newDocSubmissionSchema);

module.exports = DocSubmission;