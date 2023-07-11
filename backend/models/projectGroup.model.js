const mongoose = require('mongoose');
const cors = require('cors');

const { Schema }= mongoose;

const newGroupSchema = new Schema({
    leader:String,
    member2:String,
    member3:String,
    member4:String,
    topic:String,
    allocatedPM:String,
    grpID:String,
    allocatedSupervisor:String,
    allocatedCoSup:String
});

const ProjectGroup = mongoose.model("ProjectGroup", newGroupSchema);

module.exports = ProjectGroup;