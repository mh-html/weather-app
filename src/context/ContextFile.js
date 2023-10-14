import React, {createContext, useState} from 'react'

export const DataProvider = createContext()

function ContextFile({children}) {
  const [weatherData, setWeatherData] = useState({})
  return (
    <DataProvider.Provider value={{weatherData, setWeatherData}}>
        {children}
    </DataProvider.Provider>
  )
}

export default ContextFile;