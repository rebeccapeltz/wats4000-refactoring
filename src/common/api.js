import axios from 'axios';

export const API = axios.create({
  baseURL: `//api.openweathermap.org/data/2.5/`
})
API.interceptors.request.use(function (config) {
    // Set common parameters on each request
    config.params.APPID = 'e2974148d9fbd649739ac00943298672';
    config.params.units = 'imperial';
    return config;
  }, function (error) {
    return Promise.reject(error);
  });