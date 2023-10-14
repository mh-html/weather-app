import React, { useContext } from 'react'
//context
import { DataProvider } from '../context/ContextFile'
//icons
import {RiWindyFill} from 'react-icons/ri'
import {WiHumidity} from 'react-icons/wi'
import {FaTemperatureQuarter} from 'react-icons/fa6'
//function
import retC from '../funcs/getC'

function Overdata() {
  const {weatherData} = useContext(DataProvider)
  return (
      <div className='text-white flex justify-around items-center mt-20 py-2 backdrop-blur-sm shadow-white/20 shadow-md rounded-md bg-white/10'>
        {
          Object.keys(weatherData).length && !weatherData.errMessage ?
        <>
          <div className='flex flex-col items-center justify-center'>
              <WiHumidity size={30}className='mb-2' />
              <p className='text-md font-light'>humidity</p>
              <p className='text-lg font-bold'>{weatherData?.main?.humidity}%</p>
          </div>
          <div className='flex flex-col items-center justify-center'>
              <RiWindyFill size={30}className='mb-2' />
              <p className='text-md font-light'>wind</p>
              <p className='text-lg font-bold'>{weatherData?.wind?.speed} km/h</p>
          </div>
          <div className='flex flex-col items-center justify-center'>
              <FaTemperatureQuarter size={30}className='mb-2' />
              <p className='text-md font-light'>feels_like</p>
              <p className='text-lg font-bold'>{retC(weatherData?.main?.feels_like)}°C</p>
          </div>
        </> : <p className='text-lg italic'>With more Details...</p>
        }
      </div>
  )
}

export default Overdata