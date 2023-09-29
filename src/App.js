import React, { useState } from "react";
import { fetchActivity, fetchWeather, fetchRandomUser } from "./apiService";
import "./App.css";

const ActivityComponent = () => {
  const [activityData, setActivityData] = useState("");
  const [weatherData, setWeatherData] = useState("");
  const [randomUserData, setRandomUserData] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  // Button click eventhandler
  const handleFetchActivity = async () => {
    // Getting activity using latitude and longitude inputs
    const activityData = await fetchActivity(latitude, longitude);
    console.log(activityData);
    setActivityData(activityData);

    // Getting weather at location using latitude and longitude inputs
    const weatherData = await fetchWeather(latitude, longitude);
    console.log(weatherData);
    setWeatherData(weatherData);

    // Getting random users title, name and surname and joining it
    const randomUserData = await fetchRandomUser();
    const fullName =
      randomUserData.results[0].name.title +
      " " +
      randomUserData.results[0].name.first +
      " " +
      randomUserData.results[0].name.last;
    setRandomUserData(fullName);
  };

  return (
    <div className="App">
      <h2>Please enter latitude and longitude coordinates</h2>
      <input
        type="text"
        placeholder="Latitude"
        value={latitude}
        onChange={(e) => setLatitude(e.target.value)}
      />
      <input
        type="text"
        placeholder="Longitude"
        value={longitude}
        onChange={(e) => setLongitude(e.target.value)}
      />
      <button onClick={handleFetchActivity}>Get Activity Details</button>

      <div className="container">
        <div className="card">
          {activityData && (
            <div>
              <p>Activity:</p>
              <h2>{activityData.activity}</h2>
              <p>Cost:</p>
              <h2>{activityData.price}</h2>
            </div>
          )}
        </div>
        <div className="card">
          {weatherData && (
            <div>
              <p>Temperature:</p>
              <h2>{weatherData.temp}°C</h2>
              <p>Max Temperature:</p>
              <h2>{weatherData.temp_max}°C</h2>
              <p>Min Temperature:</p>
              <h2>{weatherData.temp_min}°C</h2>
            </div>
          )}
        </div>
        <div className="card">
          {randomUserData && (
            <div>
              <p>Friend Joining:</p>
              <h2>{randomUserData}</h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ActivityComponent;
