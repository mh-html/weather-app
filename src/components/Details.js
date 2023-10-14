import React, { useContext } from 'react'
import '../index.css'
//context
import { DataProvider } from '../context/ContextFile'
import retC from '../funcs/getC';

function Details() {
  const {weatherData} = useContext(DataProvider)
  return (
    <div className='text-white mt-14'>
    {!!Object.keys(weatherData).length && !weatherData.errMessage &&
      <>
        <p className='text-xl font-semibold'>{weatherData?.weather[0]?.main}</p>
        <p className='text-lg'>{retC(weatherData?.main?.temp_min)}°C / {retC(weatherData?.main?.temp_max)}°C</p>
      </> 
    }
    {
      !!weatherData.errMessage && <p className='text-lg font-semibold capitalize'>{weatherData.errMessage}</p>
    }
    </div>
  )
}

export default Details