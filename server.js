const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

// ✅ Middleware
app.use(cors());
app.use(express.json()); // Make sure this middleware is included

// ✅ MongoDB Connection
const mongoURI = process.env.MONGO_URI || "mongodb://localhost:27017/employeesdb";
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((error) => console.error("❌ MongoDB Connection Error:", error));

// ✅ Import Routes
const employeeRoutes = require("./server/route/employee.route");
app.use("/employees", employeeRoutes); // Ensure this is correct!

const leaveTypeRoutes = require("./server/route/leaveType.route");
app.use("/leavetype", leaveTypeRoutes); // Ensure this is correct!

const leaveRequestRoutes = require("./server/route/leaveRequest.route");
app.use("/leaverequest", leaveRequestRoutes); // Ensure this is correct!

const attendanceRoutes = require("./server/route/attendance.route");
app.use("/attendance", attendanceRoutes); // Ensure this is correct!



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
