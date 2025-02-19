const express = require('express');
const router = express.Router();
const { createLeaveType } = require("../controller/leaveType.controller");
// router.get('/', leaveTypeController.getLeaveTypes);
// router.get('/:id', leaveTypeController.getLeaveType);
router.post('/add', createLeaveType);
// router.put('/:id', leaveTypeController.updateLeaveType);
// router.delete('/:id', leaveTypeController.deleteLeaveType);

module.exports = router;
