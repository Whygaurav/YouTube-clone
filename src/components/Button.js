import React from 'react'

const Button = ({name}) => {
  return (
    <div className='' >
        <button className = 'px-4 py-1.5 m-2 bg-gray-200 text-sm rounded-lg whitespace-nowrap'>{name}</button>
    </div>
  )
}

export default Button
