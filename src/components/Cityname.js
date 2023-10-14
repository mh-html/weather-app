import React, { useState, useContext } from 'react'
import axios from "axios";
//context
import { DataProvider } from '../context/ContextFile';
//funcions
import retDays from '../funcs/getDay'
import retMonth from '../funcs/getMonth'
import retC from '../funcs/getC'

function Cityname() {
  const [currentCity, setCurrentCity] = useState("")
  const [loading, setLoading] = useState(false)
  const {weatherData ,setWeatherData} = useContext(DataProvider)
  const date = new Date()

  const cityHandler = (e) =>{
    setCurrentCity(e.target.value)
  }

  const setCityHandler = async (e) =>{
    if(e.key === "Enter"){
      setLoading(true)
      await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${currentCity}&appid=87574db0859ad52cef487ee72c854f16`)
      .then(res => setWeatherData(res.data))
      .catch(err => setWeatherData({errMessage: err.response.data.message}))
      .finally(() => setLoading(false))
    }
  }

  return (
    <div className='text-white mt-2'>
        <input type='text' placeholder='Search...'
        value={currentCity}
        onChange={cityHandler}
        onKeyDown={setCityHandler}
        className='mb-8 px-8 py-1 bg-transparent border-2 border-white rounded-md placeholder:text-white outline-none'
        />
        {
          !!Object.keys(weatherData).length && !weatherData.errMessage &&
          <>
            <h1 className='font-bold text-2xl capitalize'>{weatherData?.name}</h1>
            <p className='text-gray-200'>{retDays(date.getDay())} , {retMonth(date.getMonth())} {date.getDate()}, {date.getFullYear()}</p>
            <p className='font-bold text-[70px]'>{retC(weatherData?.main?.temp)}°<span className='text-[50px]'>C</span></p>
            <p className='font-bold text-3xl'>----------------</p>
          </> 
        }
        {loading && <div className="custom-loader m-auto"></div>}
    </div>
  )
}

export default Cityname