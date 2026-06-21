const express = require("express");

const router = express.Router();

router.post("/analyze", async (req, res) => {
  const { report } = req.body;

  if (!report) {
    return res.status(400).json({
      error: "Report is required",
    });
  }

  const text = report.toLowerCase();

  let severity = "Low";
  let priority = "Monitor situation";

  if (
    text.includes("trapped") ||
    text.includes("injured") ||
    text.includes("no electricity") ||
    text.includes("flood")
  ) {
    severity = "Critical";
    priority = "Immediate response";
  }

  res.json({
    severity,
    priority,
    recommendedResources: [
      "Rescue team",
      "Medical support",
      "Temporary shelter",
    ],
  });
});

module.exports = router;