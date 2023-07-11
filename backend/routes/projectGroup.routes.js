const express = require('express');
const router = express.Router();

const {
    addNewProjectGroup, getAllProjectGroups, updatePM_and_ID, updateTopic_andSup
} = require('../controllers/projectGroup.controller');

router.post('/add', addNewProjectGroup);
router.get('/getAll', getAllProjectGroups);
router.put('/updatePM_ID', updatePM_and_ID);
router.put('/updateTopicSup', updateTopic_andSup);
module.exports = router;
