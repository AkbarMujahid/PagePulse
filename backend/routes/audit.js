const express = require("express");
const axios = require("axios");

const parseHTML = require("../utils/parser");

const router = express.Router();

router.post("/audit", async (req, res) => {
  const { url } = req.body;

  // Check if URL is provided
  if (!url) {
    return res.status(400).json({
      success: false,
      error: "URL is required",
    });
  }

  // Validate URL
  try {
    new URL(url);
  } catch {
    return res.status(400).json({
      success: false,
      error: "Invalid URL",
    });
  }

  try {
    // Start timer
    const startTime = Date.now();

    // Fetch webpage
    const response = await axios.get(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/138.0 Safari/537.36",
      },
      timeout: 10000,
    });

    // Check if the response is HTML
    const contentType = response.headers["content-type"];

    if (!contentType || !contentType.includes("text/html")) {
      return res.status(400).json({
        success: false,
        error: "URL does not point to an HTML page.",
      });
    }

    // Calculate response time
    const responseTime = Date.now() - startTime;

    // Parse HTML
    const report = parseHTML(response.data);

    // Send response
    res.json({
      success: true,
      status: response.status,
      responseTime: `${responseTime} ms`,
      ...report,
    });
  } catch (error) {
    // Handle timeout
    if (error.code === "ECONNABORTED") {
      return res.status(408).json({
        success: false,
        error: "Request timed out.",
      });
    }

    // Handle website not found
    if (error.response) {
      return res.status(error.response.status).json({
        success: false,
        error: `Website returned status ${error.response.status}`,
      });
    }

    // Generic error
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

module.exports = router;