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

exports.getPayrollById = async (req, res) => {
    try {
        const { id } = req.params;
        const payroll = await Payroll.findById(id);
        if (!payroll) {
            return res.status(404).json({ error: 'Payroll not found' });
        }
        res.status(200).json(payroll);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


