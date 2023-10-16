import React, { useContext } from "react";
//component
import DataCardInfo from "./DataCardInfo";
//context
import { DataFromContext } from "../context/WeatherDataContext ";
//icons
import { RiWindyFill } from "react-icons/ri";
import { WiHumidity } from "react-icons/wi";
import { FaTemperatureQuarter } from "react-icons/fa6";
//function
import convertKelvinToCelsius from "../utils/convertKelvinToCelsius";

function WeatherAdditionalInfo() {
  const { weatherData } = useContext(DataFromContext);
  return (
    <div className="text-white flex justify-around items-center mt-20 py-2 backdrop-blur-sm shadow-white/20 shadow-md rounded-md bg-white/10">
      {weatherData.main && !weatherData.errorMessage ? (
        <>
        <DataCardInfo icon={WiHumidity} name="humidity" info={weatherData?.main?.humidity} unit="%" />
        <DataCardInfo icon={RiWindyFill} name="wind" info={weatherData?.wind?.speed} unit="km/h" />
        <DataCardInfo icon={FaTemperatureQuarter} name="feels_like" 
        info={convertKelvinToCelsius(weatherData?.main?.feels_like)} unit="°C" />
        </>
      ) : (
        <p className="text-lg italic">With more Details...</p>
      )}
    </div>
  );
}

export default WeatherAdditionalInfo;
