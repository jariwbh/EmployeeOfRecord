const express = require('express');
const router = express.Router();
const advanceController = require('../controller/advance.controller');

router.post('/', advanceController.createAdvance);
router.get('/', advanceController.getAdvances);

module.exports = router;
