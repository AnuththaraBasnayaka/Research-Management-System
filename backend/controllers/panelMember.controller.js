
const PanelMember = require('../models/panelMember.model');
const Admin = require('../models/admin.model');

const signUpPanelMember = (req, res)=> {
    const fullname = req.body.fullname;
    const pnum = req.body.pnum;
    const Email = req.body.Email;
    const password = req.body.password;

    const newPanelMember = new PanelMember({
        fullname,
        pnum,
        Email,
        password
    });

    newPanelMember.save().then((PanelMember) => {
        res.json(PanelMember);
    }).catch((err) => {
        res.json(err);
    })

}

const getAllPanelMembers = (req, res) => {
    PanelMember.find().then((PanelMember) => {
        res.json(PanelMember);
    }).catch((err) => {
        res.json(err);
    })
}

const deletePanelMember = (req, res) => {
    PanelMember.findByIdAndDelete(req.params.id)
        .then(() => res.json('Request Deleted.'))
        .catch(err => res.status(400).json('Error : ' + err));
}

const getPanelMemberById = (req, res) => {
    PanelMember.findById(req.params.id)
        .then((PanelMember) => res.json(PanelMember))
        .catch(err => res.json(err))
}

const updatePanelMember = (req, res) => {

    PanelMember.findByIdAndUpdate(req.params.id, {$set:{password:req.body.password, pnum:req.body.pnum, Email:req.body.Email}})
        .then(() => res.json('Good'))
        .catch(err => res.status(400).json('Error : ' +err));
}

const checkLoginPanelMember = (req, res) => {
    const logemail = req.body.logemail;
    const logpwd = req.body.logpwd;

    if(logemail.slice(0,5) == 'admin'){
        Admin.find({Email:logemail}).then((Admin) => {
            if((!Admin[0]) || (Admin[0].password != logpwd)){
                res.json('Invalid Username or Password');
            }
            else {
                res.json('Login Successfull');
            }
        })
    }
    else {
        PanelMember.find({Email:logemail}).then((PanelMember) => {
            if((!PanelMember[0]) || (PanelMember[0].password != logpwd)) {
                res.json('Invalid Username or Password');
            }
            else {
                res.json('Login Successfull');
            }
        }).catch((err) => {
            res.json(err);
        })
    }
}

module.exports ={
    signUpPanelMember,
    getAllPanelMembers,
    deletePanelMember,
    getPanelMemberById,
    updatePanelMember,
    checkLoginPanelMember
}