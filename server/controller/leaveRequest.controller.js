const LeaveRequest = require("../model/leaveRequest.model");

exports.createLeaveRequest = async (req, res) => {
  try {
    const {leaveType,  startDate, endDate, reason } = req.body;
    if (!leaveType || !startDate || !endDate || !reason) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newLeaveRequest = new LeaveRequest({ leaveType, startDate, endDate, reason });
    const savedLeaveRequest = await newLeaveRequest.save();
    res.status(201).json(savedLeaveRequest);
  } catch (error) {
    res.status(500).json({ message: "Error creating leave request", error });
  }
};

exports.getLeaveRequestByID = async (req, res) => {
  try {
    const { id } = req.params;
    const leaveRequest = await LeaveRequest.findById(id);
    if (!leaveRequest) {
      return res.status(404).json({ message: "Leave request not found" });
    }
    res.status(200).json(leaveRequest);
  } catch (error) {
    res.status(500).json({ message: "Error getting leave request", error });
  }
};

exports.updateLeaveRequestByID = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    const updatedLeaveRequest = await LeaveRequest.findByIdAndUpdate(id, updates, { new: true });

    if (!updatedLeaveRequest) {
      return res.status(404).json({ message: "Leave request not found" });
    }

    res.status(200).json(updatedLeaveRequest);
  } catch (error) {
    res.status(500).json({ message: "Error updating leave request", error });
  }
};

exports.deleteLeaveRequest = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedLeaveRequest = await LeaveRequest.findByIdAndDelete(id);

    if (!deletedLeaveRequest) {
      return res.status(404).json({ message: "Leave request not found" });
    }

    res.json({ message: "Leave request deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting leave request", error });
  }
};
