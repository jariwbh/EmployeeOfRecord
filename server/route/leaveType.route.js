const express = require('express');
const router = express.Router();
const { createLeaveType, getLeaveTypes, getLeaveType, deleteLeaveType } = require("../controller/leaveType.controller");
router.get('/get', getLeaveTypes);
router.get('/:id', getLeaveType);
router.post('/add', createLeaveType);
// router.put('/:id', leaveTypeController.updateLeaveType);
router.delete('/delete/:id', deleteLeaveType);

module.exports = router;
