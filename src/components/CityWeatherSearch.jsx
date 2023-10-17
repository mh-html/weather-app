import React, { useState, useContext } from "react";
import axios from "axios";

import { DataFromContext } from "../context/WeatherDataContext ";
import getDayOfWeek from "../utils/getDayOfWeek";
import getMonthName from "../utils/getMonthName";
import convertKelvinToCelsius from "../utils/convertKelvinToCelsius";

function CityWeatherSearch() {
  const [searchInput, setSearchInput] = useState("");
  const [isLoading, setLoading] = useState(false);
  const { weatherData, setWeatherData } = useContext(DataFromContext);
  const currentDate = new Date();

  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearchSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    if (searchInput) {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&appid=87574db0859ad52cef487ee72c854f16`
        );
        setWeatherData(response.data);
      } catch (error) {
        setWeatherData({ errorMessage: "City Not Found" });
      } finally {
        setLoading(false);
        setSearchInput("");
      }
    }
  };

  return (
    <div className="text-white mt-2">
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Search..."
          value={searchInput}
          onChange={handleSearchInputChange}
          className="mb-8 px-8 py-1 bg-transparent border-2 border-white rounded-md placeholder:text-white outline-none"
        />
        <button type="submit" className="hidden"></button>
      </form>
      <p className="text-gray-200">
            {getDayOfWeek[currentDate.getDay()]}{" , "}
            {getMonthName[currentDate.getMonth()]}
            {currentDate.getDate()},
            {currentDate.getFullYear()}
      </p>
      {weatherData.main && !weatherData.errorMessage && (
        <>
          <h1 className="font-bold text-2xl capitalize">
            {weatherData?.name} / {weatherData?.sys?.country}
          </h1>
          <p className="font-bold text-[70px]">
            {convertKelvinToCelsius(weatherData?.main?.temp)}°
            <span className="text-[50px]">C</span>
          </p>
          <p className="font-bold text-3xl">----------------</p>
        </>
      )}
      {isLoading && (
        <div className="animate-spin w-full h-full border-spacing-4 border-gray-500 border-r-gray-300 rounded-full m-auto"></div>
      )}
    </div>
  );
}

export default CityWeatherSearch;
