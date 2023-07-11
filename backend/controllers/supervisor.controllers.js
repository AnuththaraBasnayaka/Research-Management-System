const Supervisor = require('../models/supervisor.model');
const ProjectGroup = require('../models/projectGroup.model');

const signUpSupervisor = (req, res) => {
    const fullname = req.body.fullname;
    const pnum = req.body.pnum;
    const Email = req.body.Email;
    const password = req.body.password;
    const title = req.body.title;
    const researchArea = req.body.researchArea;

    const newSupervisor = new Supervisor({
        fullname,
        pnum,
        Email,
        password,
        title,
        researchArea
    });

    newSupervisor.save().then((Supervisor) => {
        res.json(Supervisor);
    }).catch((err) => {
        res.json(err);
    })

}

const getAllSupervisors = (req, res) => {
    Supervisor.find().then((Supervisor) => {
        res.json(Supervisor);
    }).catch((err) => {
        res.json(err);
    })
}

const deleteSupervisor = (req, res) => {
    Supervisor.findByIdAndDelete(req.params.id)
        .then(() => res.json('Request Deleted.'))
        .catch(err => res.status(400).json('Error : ' + err));
}


const getSupervisortById = (req, res) => {
    Supervisor.findById(req.params.id)
        .then((Supervisor) => res.json(Supervisor))
        .catch(err => res.json(err))
}

const updateSupervisor = (req, res) => {

    Supervisor.findByIdAndUpdate(req.params.id, {
        $set: {
            password: req.body.password,
            pnum: req.body.pnum,
            Email: req.body.Email,
            title: req.body.title
        }
    })
        .then(() => res.json('Good'))
        .catch(err => res.status(400).json('Error : ' + err));
}

const checkLoginSupervisor = (req, res) => {
    const logemail = req.body.logemail;
    const logpwd = req.body.logpwd;

    Supervisor.find({Email: logemail}).then((Supervisor) => {
        if ((!Supervisor[0]) || (Supervisor[0].password != logpwd)) {
            res.json('Invalid Username or Password');
        } else {
            res.json('Login Successfull');
        }
    }).catch((err) => {
        res.json(err);
    })

}

const getSupervisorsWithoutGroups = (req, res) => {
    let supervisors = [];
    let projectGroups = [];

    let finalSups = [];
    let finalCoSups = [];

    Supervisor.find().then((Supervisor) => {
        supervisors = Supervisor;

        ProjectGroup.find().then((ProjectGroup) => {
            projectGroups = ProjectGroup;
        }).catch((err) => {
            res.json(err);
        })

    }).then(() => {
        supervisors.map((sup) => {
            var count = 0;
            if (sup.title == 'Supervisor') {
                projectGroups.map((pgr1) => {
                    if (pgr1.allocatedSupervisor == sup.Email) {
                        count++;
                    }
                })
                if(count < 2)
                    finalSups.push(sup);

            } else {
                projectGroups.map((pgr2) => {
                    if (pgr2.allocatedCoSup == sup.Email) {
                        count++;
                    }
                })
                if(count < 2)
                    finalCoSups.push(sup);
            }

        })
    }).then(() => {
        const data = {
            finalSups,
            finalCoSups
        }
        res.json(data);

    })
        .catch((err) => {
        res.json(err);
    })

}

module.exports = {
    signUpSupervisor,
    getAllSupervisors,
    deleteSupervisor,
    getSupervisortById,
    updateSupervisor,
    checkLoginSupervisor,
    getSupervisorsWithoutGroups
}