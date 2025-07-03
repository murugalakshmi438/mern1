const express = require("express");
const axios = require("axios");
const router = express.Router();

// ✅ OpenWeatherMap API key here
const apiKey = "6b2f1dc37eb059a0bbf7b05bd97f03bb";

router.get("/:city", async (req, res) => {
  const city = req.params.city;

  try {
    const response = await axios.get("https://api.openweathermap.org/data/2.5/forecast", {
      params: {
        q: city,
        appid: apiKey,
        units: "metric",
      },
    });

    res.json(response.data);
  } catch (error) {
    console.error("OpenWeather API Error:", error.response?.data || error.message);
    res.status(500).json({ error: "Could not fetch forecast" });
  }
});

module.exports = router;

