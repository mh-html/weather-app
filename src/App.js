import React, { useContext } from "react";
//componens
import Cityname from "./components/Cityname";
import Details from "./components/Details";
import Overdata from "./components/Overdata";
//context
import { DataProvider } from "./context/ContextFile";

function App() {
  const {weatherData} = useContext(DataProvider)

  const returnBG = (state) =>{
    const base = " w-screen h-screen bg-center bg-cover"
    if(Object.keys(state).length && !state.errMessage){
      
      switch(state?.weather[0]?.main){
      case 'Snow':
        return "bg-snow"+base
      case 'Haze':
      case 'Mist':
      case 'Smoke':
        return "bg-haze"+base
      case 'Rain':
        return "bg-rainy"+base
      case 'Dust':
        return "bg-dust"+base
      case 'Clear':
        return "bg-clear"+base
      case 'Clouds':
        return "bg-cloudy"+base
      case 'Thunderstorm':
      case 'Drizzle':
        return "bg-thunder"+base
      default:
        return "bg-primary"+base
      }
    }else{
      return "bg-primary"+base
    }
 
  }
  return (
    <div className={returnBG(weatherData)}>
      <div className="w-full h-full bg-black/40 text-center px-4">
        <h1 className="text-xl text-white font-bold pt-4 capitalize">weather app mohammad hossein</h1>
          <Cityname />
          <Details />
          <Overdata />
      </div>
    </div>
  );
}

export default App;
