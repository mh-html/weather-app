import React from 'react'

import {RiWindyFill} from 'react-icons/ri'
import {WiHumidity} from 'react-icons/wi'
import {FaTemperatureQuarter} from 'react-icons/fa6'

function Overdata() {
  return (
    <div className='text-white flex justify-around items-center mt-20 py-2 backdrop-blur-sm shadow-white/20 shadow-md rounded-md bg-white/10'>
        <div className='flex flex-col items-center justify-center'>
            <WiHumidity size={30}className='mb-2' />
            <p>humidity</p>
            <p>34%</p>
        </div>
        <div className='flex flex-col items-center justify-center'>
            <RiWindyFill size={30}className='mb-2' />
            <p>wind</p>
            <p>10 km/h</p>
        </div>
        <div className='flex flex-col items-center justify-center'>
            <FaTemperatureQuarter size={30}className='mb-2' />
            <p>feels_like</p>
            <p>34°C</p>
        </div>
    </div>
  )
}

export default Overdata