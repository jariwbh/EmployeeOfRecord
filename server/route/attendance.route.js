const express = require('express');
const { saveAttendance, getAttendanceRecords, getAttendanceRecordsByEmployeeId, getAttendanceRecordsByEmployeeIdAndDate } = require('../controller/attendance.controller');

const router = express.Router();

router.post('/add', saveAttendance);
router.get('/get', getAttendanceRecords);
router.get('/employee/:employeeId', getAttendanceRecordsByEmployeeId);
// router.get('/employee/:employeeId/:date', getAttendanceRecordsByEmployeeIdAndDate);

module.exports = router;
