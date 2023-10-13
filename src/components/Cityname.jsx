import React from 'react'

function Cityname() {
  return (
    <div className='text-white mt-2'>
        <input type='text' placeholder='Search...'
        className='mb-8 px-8 py-1 bg-transparent border-2 border-white rounded-md placeholder:text-white outline-none'
        />
        <h1 className='font-bold text-2xl'>Tehran</h1>
        <p className='text-gray-200'>Saturday , February 14, 2023</p>
        <p className='font-bold text-[70px]'>23°<span className='text-[50px]'>C</span></p>
        <p className='font-bold text-3xl'>----------------</p>
    </div>
  )
}

export default Cityname