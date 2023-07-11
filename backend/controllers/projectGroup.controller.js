const ProjectGroup = require('../models/projectGroup.model');

const addNewProjectGroup = (req, res) => {
    const leader = req.body.leader;
    const member2 = req.body.member2;
    const member3 = req.body.member3;
    const member4 = req.body.member4;
    const topic = '';
    const allocatedPM = '';
    const grpID = '';
    const allocatedSupervisor = '';
    const allocatedCoSup = '';

    const newProjectGroup = new ProjectGroup({
        leader,
        member2,
        member3,
        member4,
        topic,
        allocatedSupervisor,
        allocatedPM,
        grpID,
        allocatedCoSup
    });

    newProjectGroup.save().then((ProjectGroup) => {
        res.json(ProjectGroup);
    }).catch((err) => {
        res.json(err);
    })

}

const getAllProjectGroups = (req, res) => {
    ProjectGroup.find().then((ProjectGroup) => {
        res.json(ProjectGroup);
    }).catch((err) => {
        res.json(err);
    })
}

const updatePM_and_ID = (req, res) => {
    const mongoId = req.body.id;
    const grpID = req.body.grpID;
    const allocatedPM = req.body.allocatedPM;

    ProjectGroup.findByIdAndUpdate(mongoId, {$set:{grpID:grpID, allocatedPM:allocatedPM}})
        .then(() => res.json('Good'))
        .catch(err => res.status(400).json('Error : ' +err));
}

const updateTopic_andSup = (req, res) => {
    const grpId = req.body.grpID;
    const allocatedSup = req.body.allocatedSupervisor;
    const topic = req.body.topic;

    const update = { topic:topic, allocatedSupervisor:allocatedSup };

    ProjectGroup.findOneAndUpdate({grpID:grpId}, update)
        .then(() => res.json('Good'))
        .catch(err => res.status(400).json('Error : ' + err));
}

module.exports = {
    addNewProjectGroup,
    getAllProjectGroups,
    updatePM_and_ID,
    updateTopic_andSup
}