import React, { useState } from 'react';
import { getWeather } from '../api';

const Weather = () => {
  const [city, setCity] = useState('');
  const [forecast, setForecast] = useState([]);
  const [error, setError] = useState('');

  const fetchWeather = async () => {
    try {
      const { data } = await getWeather(city);
      setForecast(data.list.slice(0, 6)); // Displaying next 6 entries (~18 hours)
      setError('');
    } catch (err) {
      setForecast([]);
      setError('City not found or server error');
    }
  };

  return (
    <div className="weather-container">
      <h2>Weather Forecast</h2>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={fetchWeather}>Get Weather</button>

      {error && <p>{error}</p>}

      <div className="forecast">
        {forecast.map((item, index) => (
          <div key={index} className="forecast-card">
            <p>{item.dt_txt}</p>
            <p>Temp: {item.main.temp}°C</p>
            <p>{item.weather[0].description}</p>
            <img
              src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
              alt="icon"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Weather;
