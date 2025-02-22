const mongoose = require('mongoose');

const payrollSchema = new mongoose.Schema({
    month: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    totalEmployees: {
        type: Number,
        required: true
    },
    paymentDate: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    }
});

const Payroll = mongoose.model('Payroll', payrollSchema);

module.exports = Payroll;
