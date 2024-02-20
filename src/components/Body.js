import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div className='flex flex-row overflow-auto pt-20 '>
        <Sidebar></Sidebar>
        <Outlet />
    </div>
  )
}

export default Body
// grid grid-cols-[auto, 1fr] flex-grow-1