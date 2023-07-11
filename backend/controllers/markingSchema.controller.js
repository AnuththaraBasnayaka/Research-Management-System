const MarkingScheme = require('../models/markingSchema.model');

const addNewMarkingScheme = (req, res) => {
    const submissionType = req.body.submissionType;
    const markingCriteria = req.body.markingCriteria;

    const newMarkingScheme = new MarkingScheme({
        submissionType,
        markingCriteria
    });

    newMarkingScheme.save().then((MarkingScheme) => {
        res.json(MarkingScheme);
    }).catch((err) => {
        res.json(err);
    })

}

const getAllMarkingSchemes = (req, res) => {
    MarkingScheme.find().then((MarkingScheme) => {
        res.json(MarkingScheme);
    }).catch((err) => {
        res.json(err);
    })
}

module.exports = {
    addNewMarkingScheme,
    getAllMarkingSchemes
}