const express = require("express");
const cors = require("cors");

const auditRoutes = require("./routes/audit");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Root Route
app.get("/", (req, res) => {
  res.json({
    service: "PagePulse Backend API",
    status: "Running",
    version: "1.0.0",
    author: "Akbar Mujahid",
    endpoints: {
      audit: {
        method: "POST",
        path: "/audit",
        body: {
          url: "https://example.com"
        }
      }
    }
  });
});
// API Routes
app.use("/", auditRoutes);

module.exports = app;