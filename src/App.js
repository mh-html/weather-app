import React, { useContext } from "react";
//componens
import CityWeatherSearch from "./components/CityWeatherSearch";
import WeatherInfoPanel from "./components/WeatherInfoPanel";
import WeatherAdditionalInfo from "./components/WeatherAdditionalInfo";
//context
import { DataFromContext } from "./context/WeatherDataContext ";

function App() {
  const { weatherData } = useContext(DataFromContext);

    const baseClass = " w-screen h-screen bg-center bg-cover ";
    const weatherConditions = {
      Snow: "bg-snow",
      Haze: "bg-haze",
      Mist: "bg-haze",
      Smoke: "bg-haze",
      Rain: "bg-rainy",
      Dust: "bg-dust",
      Clear: "bg-clear",
      Clouds: "bg-cloudy",
      Thunderstorm: "bg-thunder",
      Drizzle: "bg-dizzle",
      default: "bg-primary",
    }[weatherData.main ? weatherData.weather[0].main : 'default'];

  return (
    <div className={`${weatherConditions}${baseClass}`}>
      <div className="w-full h-full bg-black/50 text-center px-4">
        <h1 className="text-xl text-white font-bold pt-4 capitalize">
          weather app mohammad hossein
        </h1>
        <CityWeatherSearch />
        <WeatherInfoPanel />
        <WeatherAdditionalInfo />
      </div>
    </div>
  );
}

export default App;
