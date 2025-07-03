import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api', // change this if your backend is hosted elsewhere
});

export const getWeather = (city) => API.get(`/weather/${city}`);

