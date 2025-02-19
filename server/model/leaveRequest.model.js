const mongoose = require("mongoose");

const LeaveRequestSchema = new mongoose.Schema({
//   employeeId: { type: mongoose.Schema.Types.ObjectId, ref: "Employee", required: true },
  leaveType: { type: mongoose.Schema.Types.ObjectId, ref: "LeaveType", required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  reason: { type: String, required: true }
});

module.exports = mongoose.model("LeaveRequest", LeaveRequestSchema);
