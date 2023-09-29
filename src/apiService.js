import axios from 'axios';

const locationUrl = "https://www.boredapi.com"; // Location api
const weatherUrl = "https://fcc-weather-api.glitch.me"; //Weather api
const randomUserUrl = 'https://randomuser.me/api/'; // random user api

// Using locationUrl to get the response from the api using the input coordinates
export const fetchActivity = async (latitude, longitude) => {
  const response = await axios.get(`${locationUrl}/api/activity?lat=${latitude}&lon=${longitude}`);
  return response.data;
};

// Using the weatherUrl to get the weather at the specific location
export const fetchWeather = async (latitude, longitude) => {
  const weatherResponse = await axios.get(`${weatherUrl}/api/current?lat=-${latitude}&lon=${longitude}`);
  return weatherResponse.data.main;
};

// Using randomUserUrl to get a random user
export const fetchRandomUser = async () => {
  const randomUser = await axios.get(randomUserUrl);
  return randomUser.data;
}
