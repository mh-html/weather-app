import React, { useContext } from "react";
import "../index.css";
//context
import { DataFromContext } from "../context/WeatherDataContext ";
import convertKelvinToCelsius from "../utils/convertKelvinToCelsius";

function WeatherInfoPanel() {
  const { weatherData } = useContext(DataFromContext);
  return (
    <div className="text-white mt-14">
      {weatherData.main && !weatherData.errorMessage && (
        <>
          <p className="text-xl font-semibold">
            {weatherData?.weather[0]?.main}
          </p>
          <p className="text-lg">
            {convertKelvinToCelsius(weatherData?.main?.temp_min)}°C /
            {convertKelvinToCelsius(weatherData?.main?.temp_max)}°C
          </p>
        </>
      )}
      {!!weatherData.errorMessage && (
        <p className="text-lg font-semibold capitalize">
          {weatherData.errorMessage}
        </p>
      )}
    </div>
  );
}

export default WeatherInfoPanel;
