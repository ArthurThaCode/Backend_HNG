const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();

app.use(cors());

const PORT = process.env.PORT || 3000;

app.get("/api/classify", async (req, res) => {
  const name = req.query.name;

  if (!name || typeof name !== "string" || name.trim() === "") {
    return res.status(400).json({
      status: "error",
      message: "Name is required",
    });
  }

  try {
    const response = await axios.get(
      `https://api.genderize.io?name=${encodeURIComponent(name)}`
    );

    const data = response.data;

    if (!data || data.gender === null || data.count === 0) {
      return res.status(422).json({
        status: "error",
        message: "No prediction available for the provided name",
      });
    }

    const gender = data.gender;
    const probability = Number(data.probability) || 0;
    const sample_size = Number(data.count) || 0;

    const is_confident =
      probability >= 0.7 && sample_size >= 100;

    const processed_at = new Date().toISOString();

    return res.json({
      status: "success",
      data: {
        name,
        gender,
        probability,
        sample_size,
        is_confident,
        processed_at,
      },
    });
  } catch (error) {
    console.error("ERROR:", error.message);

    return res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});