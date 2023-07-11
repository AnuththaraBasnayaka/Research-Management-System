const Marks = require('../models/marks.model');

const addMarks = (req, res) => {
    const whatFor = req.body.type;
    const grpID = req.body.grpID;
    const marks = req.body.marks;

    const newMarks = new Marks({
        whatFor,
        grpID,
        marks
    });

    newMarks.save().then((Marks) => {
        res.json(Marks);
    }).catch((err) => {
        res.json(err);
    })

}

const getAllMarks = (req, res) => {
    Marks.find().then((Marks) => {
        res.json(Marks);
    }).catch((err) => {
        res.json(err);
    })
}

module.exports = {
    addMarks,
    getAllMarks
}