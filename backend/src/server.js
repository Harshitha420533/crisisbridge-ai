const express = require("express");
const cors = require("cors");
require("dotenv").config();

const analysisRoutes = require("./routes/analysis.routes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", analysisRoutes);

// Health check route
app.get("/", (req, res) => {
  res.json({
    message: "CrisisBridge AI Backend Running",
  });
});

// Server configuration
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});