const Submission = require('../models/submission.model');

const addNewSubmission = (req, res) => {
    const submissionName = req.body.submissionName;
    const deadline = req.body.deadline;
    const additionalDetail = req.body.additionalDetail;
    const templateName = req.body.templateName;

    const newSubmission = new Submission({
        submissionName,
        deadline,
        additionalDetail,
        templateName
    });

    newSubmission.save().then((Submission) => {
        res.json(Submission);
    }).catch((err) => {
        res.json(err);
    })

}

const getAllSubmissions = (req, res) => {
    Submission.find().then((Submission) => {
        res.json(Submission);
    }).catch((err) => {
        res.json(err);
    })
}

module.exports = {
    addNewSubmission,
    getAllSubmissions
}