const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const weatherRoutes = require('./routes/weatherRoutes');

// Load environment variables from .env file
dotenv.config();

// DEBUG: Log the environment variable to confirm it's loaded
console.log("Loaded WEATHER_API_KEY:", process.env.WEATHER_API_KEY);

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/weather', weatherRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
