import React, {createContext, useState} from 'react';

export const DataFromContext = createContext(null)

function WeatherDataContext ({children}) {
  const [weatherData, setWeatherData] = useState({})
  return (
    <DataFromContext.Provider value={{weatherData, setWeatherData}}>
        {children}
    </DataFromContext.Provider>
  )
}

export default WeatherDataContext ;