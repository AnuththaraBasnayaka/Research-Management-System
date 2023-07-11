const mongoose = require('mongoose');

const { Schema }= mongoose;

const newMarksSchema = new Schema({
    whatFor: String,
    grpID: String,
    marks :String
});

const Marks = mongoose.model("Marks", newMarksSchema);

module.exports = Marks;