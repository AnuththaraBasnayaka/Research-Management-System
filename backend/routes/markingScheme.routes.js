const express = require('express');
const router = express.Router();

const {
    addNewMarkingScheme, getAllMarkingSchemes
} = require('../controllers/markingSchema.controller');

const {
    addMarks, getAllMarks
} = require('../controllers/marks.controller')

router.post('/add', addNewMarkingScheme);
router.get('/getAll', getAllMarkingSchemes);

router.post('/addMarks', addMarks);
router.get('/getAllMarks', getAllMarks);

module.exports = router;
