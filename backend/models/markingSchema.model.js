const mongoose = require('mongoose');

const { Schema }= mongoose;

const itemSchema = new Schema({
    markedArea:String,
    marksOutOf:String
});

const newMarkingSchema = new Schema({
    submissionType: String,
    markingCriteria: [itemSchema]
});

const MarkingScheme = mongoose.model("MarkingScheme", newMarkingSchema);

module.exports = MarkingScheme;