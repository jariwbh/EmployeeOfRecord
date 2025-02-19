const mongoose = require('mongoose');

const leaveTypeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  maxDays: {
    type: Number,
    required: true
  },
  // Add other fields as necessary
}, {
  timestamps: true
});

module.exports = mongoose.model('LeaveType', leaveTypeSchema);
