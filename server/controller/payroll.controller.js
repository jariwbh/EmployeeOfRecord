const Payroll = require('../model/payroll.model');

exports.createPayroll = async (req, res) => {
    try {
        const payrollData = req.body;
        // Assuming you have a Payroll model to save the data
        const savedData = await Payroll.create(payrollData);
        res.status(201).json(savedData);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


