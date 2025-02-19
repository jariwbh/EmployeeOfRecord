const LeaveType = require('../model/leaveType.model');

// Get all leave types
exports.getLeaveTypes = async (req, res) => {
  try {
    const leaveTypes = await LeaveType.find();
    res.status(200).json(leaveTypes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single leave type by ID
exports.getLeaveType = async (req, res) => {
  try {
    const leaveType = await LeaveType.findById(req.params.id);
    if (!leaveType) {
      return res.status(404).json({ message: 'Leave type not found' });
    }
    res.status(200).json(leaveType);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new leave type
exports.createLeaveType = async (req, res) => {
  console.log(req.body);
  const leaveType = new LeaveType(req.body);
  try {
    const newLeaveType = await leaveType.save();
    res.status(201).json(newLeaveType);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update an existing leave type
exports.updateLeaveType = async (req, res) => {
  try {
    const updatedLeaveType = await LeaveType.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedLeaveType) {
      return res.status(404).json({ message: 'Leave type not found' });
    }
    res.status(200).json(updatedLeaveType);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a leave type
exports.deleteLeaveType = async (req, res) => {
  try {
    const leaveType = await LeaveType.findByIdAndDelete(req.params.id);
    if (!leaveType) {
      return res.status(404).json({ message: 'Leave type not found' });
    }
    res.status(200).json({ message: 'Leave type deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
