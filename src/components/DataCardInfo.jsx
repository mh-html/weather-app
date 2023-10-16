import React from 'react'

function DataCardInfo(props) {
  return (
    <div className="flex flex-col items-center justify-center">
              <props.icon size={30} className="mb-2" />
              <p className="text-md font-light">{props.name}</p>
              <p className="text-lg font-bold">{props.info} {props.unit}</p>
          </div>
  )
}

export default DataCardInfo