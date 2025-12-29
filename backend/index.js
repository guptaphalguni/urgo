console.log("🔥 THIS BACKEND FILE IS RUNNING 🔥");

const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/test", (req, res) => {
  res.send("TEST ROUTE WORKING");
});


let emergencies = [];

// Health check
app.get("/", (req, res) => {
  res.send("Backend running");
});

// Create emergency
app.post("/api/emergency", (req, res) => {
  const emergency = {
    id: Date.now(),
    type: req.body.type,
    location: req.body.location,
    description: req.body.description,
    status: "pending",
  };

  emergencies.push(emergency);

  res.status(200).json({
    success: true,
    data: emergency,
  });
});

// Get all emergencies
app.get("/api/emergencies", (req, res) => {
  res.status(200).json({
    success: true,
    data: emergencies,
  });
});

// ✅ ACCEPT / RESOLVE ROUTE (THIS WAS MISSING)
app.put("/api/emergency/:id/status", (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  const emergency = emergencies.find(e => e.id == id);

  if (!emergency) {
    return res.status(404).json({
      success: false,
      message: "Emergency not found",
    });
  }

  emergency.status = status;

  res.status(200).json({
    success: true,
    data: emergency,
  });
});

// ⚠️ MUST BE LAST
app.listen(5000, () => {
  console.log("✅ Backend running on http://localhost:5000");
});






