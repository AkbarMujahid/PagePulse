const express = require("express");
const cors = require("cors");

const auditRoutes = require("./routes/audit");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Root Route
app.get("/", (req, res) => {
  res.send("🚀 PagePulse Backend is Running!");
});

// API Routes
app.use("/", auditRoutes);

module.exports = app;