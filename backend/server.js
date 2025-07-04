const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const weatherRoutes = require('./routes/weatherRoutes');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// ✅ Add this BEFORE the listen() call
app.get('/', (req, res) => {
  res.send('Welcome to the Weather API');
});

app.use('/api/weather', weatherRoutes);

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
