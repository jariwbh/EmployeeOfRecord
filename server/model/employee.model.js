const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const EmployeeSchema = new mongoose.Schema({
  fullname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, minlength: 6 },
  designation: { type: String },
  phonenumber: { type: String },
  dateofbirth: { type: Date },
  joiningdate: { type: Date },
  salaryComponent: {
    basic: { type: Number },
    tax: { type: Number }
  }
});

// ✅ Hash password before saving
EmployeeSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

module.exports = mongoose.model("Employee", EmployeeSchema);
