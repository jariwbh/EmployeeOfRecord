const Attendance = require('../model/attendance.model');

exports.saveAttendance = async (req, res) => {
  try {
    const { employeeId, date, checkin, checkout } = req.body;

    if (!employeeId || !date || !checkin || !checkout) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const newAttendance = new Attendance({
      employeeId,
      checkin,
      checkout,
      date
    });

    await newAttendance.save();

    res.status(201).json({ message: 'Attendance data saved successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};
