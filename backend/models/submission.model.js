const mongoose = require('mongoose');
const cors = require('cors');

const { Schema }= mongoose;

const newSubmissionSchema = new Schema({
    submissionName: String,
    deadline: Date,
    additionalDetail: String,
    templateName:String
});

const Submission = mongoose.model("submission", newSubmissionSchema);

module.exports = Submission;