const express = require('express');
const router = express.Router();

const {
    signUpPanelMember, getAllPanelMembers, deletePanelMember, getPanelMemberById, updatePanelMember,
    checkLoginPanelMember
} = require('../controllers/panelMember.controller');

router.post('/add', signUpPanelMember);
router.get('/getAll', getAllPanelMembers);
router.delete('/delete/:id', deletePanelMember);
router.get('/getPanelMemberById/:id', getPanelMemberById);
router.put('/updatePanelMember/:id', updatePanelMember);
router.post('/checkLogin', checkLoginPanelMember);

module.exports = router;
