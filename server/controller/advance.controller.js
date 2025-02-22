const Advance = require('../model/advance.model');

exports.createAdvance = async (req, res) => {
  try {
    const advance = new Advance(req.body);
    await advance.save();
    res.status(201).send(advance);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getAdvances = async (req, res) => {
  try {
    const advances = await Advance.find().populate('employee');
    res.status(200).send(advances);
  } catch (error) {
    res.status(400).send(error);
  }
};
