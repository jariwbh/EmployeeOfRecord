const express = require('express');
const { saveAttendance } = require('../controller/attendance.controller');

const router = express.Router();

router.post('/add', saveAttendance);
// router.get('', getAttendanceRecords);

module.exports = router;
