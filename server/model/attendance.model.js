const mongoose = require('mongoose');

const AttendanceSchema = new mongoose.Schema({
  employeeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee', required: true },
  date: { type: Date, required: true },
  checkin: { type: Date, required: true },
  checkout: { type: Date, required: true }
});

module.exports = mongoose.model('Attendance', AttendanceSchema);
