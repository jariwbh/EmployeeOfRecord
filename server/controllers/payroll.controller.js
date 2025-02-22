const Payroll = require('../models/payroll.model');
const Advance = require('../models/advance.model');

exports.getPayroll = async (req, res) => {
  try {
    const payroll = await Payroll.findById(req.params.id).populate('employee');
    const advances = await Advance.find({ employee: payroll.employee });

    const payrollData = {
      ...payroll._doc,
      advances
    };

    res.status(200).send(payrollData);
  } catch (error) {
    res.status(400).send(error);
  }
};
