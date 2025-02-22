const mongoose = require('mongoose');

const advanceSchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: true
  },
  employee: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Employee',
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  reason: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Advance', advanceSchema);
