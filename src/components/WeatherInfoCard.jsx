import React from 'react'

function WeatherInfoCard(props) {
  return (
        <div className="flex flex-col items-center justify-center">
            <WiHumidity size={30} className="mb-2" />
            <p className="text-md font-light">{props.name}</p>
            <p className="text-lg font-bold">{weatherData?.main?.humidity}%</p>
          </div>
  )
}

export default WeatherInfoCard