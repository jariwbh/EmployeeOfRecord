const express = require('express');
const { createPayroll, getPayrollById } = require('../controller/payroll.controller');

const router = express.Router();

router.post('/save', createPayroll);
router.get('/get/:id', getPayrollById);

module.exports = router;
