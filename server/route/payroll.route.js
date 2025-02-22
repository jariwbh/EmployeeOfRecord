const express = require('express');
const { createPayroll } = require('../controller/payroll.controller');

const router = express.Router();

router.post('/save', createPayroll);

module.exports = router;
