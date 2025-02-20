const express = require('express');
const { saveAttendance, getAttendanceRecords } = require('../controller/attendance.controller');

const router = express.Router();

router.post('/add', saveAttendance);
router.get('/get', getAttendanceRecords);

module.exports = router;
