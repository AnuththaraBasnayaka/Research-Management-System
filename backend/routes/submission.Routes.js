const express = require('express');
const router = express.Router();

const {
    addNewSubmission, getAllSubmissions
} = require('../controllers/submission.controller');

const {
    addNewDocSubmission, getAllDocSubmissions
} = require('../controllers/documentSubmission.controller');

router.post('/add', addNewSubmission);
router.get('/getAll', getAllSubmissions);

router.post('/addDocSubmission', addNewDocSubmission);
router.get('/getDocSubmissionPM', getAllDocSubmissions);

module.exports = router;
