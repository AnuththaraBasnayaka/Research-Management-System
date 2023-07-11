const mongoose = require('mongoose');
const cors = require('cors');

const { Schema }= mongoose;

const newSupervisorSchema = new Schema({
    fullname: String,
    pnum: String,
    Email :String,
    password: String,
    title: String,
    researchArea:String
});

const Supervisor = mongoose.model("Supervisor", newSupervisorSchema);

module.exports = Supervisor;