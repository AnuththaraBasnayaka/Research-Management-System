const mongoose = require('mongoose');
const cors = require('cors');

const { Schema }= mongoose;

const newPanelMemberSchema = new Schema({
    fullname: String,
    pnum: String,
    Email :String,
    password: String
});

const PanelMember = mongoose.model("PanelMember", newPanelMemberSchema);

module.exports = PanelMember;