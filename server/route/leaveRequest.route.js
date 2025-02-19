const express = require('express');
const router = express.Router();
const { createLeaveRequest } = require("../controller/leaveRequest.controller");

router.post('/add', createLeaveRequest);

module.exports = router;
