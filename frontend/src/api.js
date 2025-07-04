import axios from 'axios';

const API = axios.create({
  baseURL: 'https://mern1-uzfi.onrender.com/api', // change this if your backend is hosted elsewhere
});

export const getWeather = (city) => API.get(`/weather/${city}`);

