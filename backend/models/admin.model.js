const mongoose = require('mongoose');
const cors = require('cors');

const { Schema }= mongoose;

const newAdminSchema = new Schema({
    fullname: String,
    pnum: String,
    Email :String,
    password: String
});

const Admin = mongoose.model("Admin", newAdminSchema);

module.exports = Admin;