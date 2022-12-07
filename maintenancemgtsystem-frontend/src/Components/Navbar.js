import React from 'react'
import logo from '../assets/log.png'

const Navbar = () => {
  return (
    <div className='bg-gray-800'>
        <div className='h-16 px-8 flex items-center'>
          <div>
            <img src={logo} alt='lodo' className='h-12'/>
          </div>
            <p className='text-white font-bold'>Campus Mgt System</p>
        </div>
    </div>
  )
}

export default Navbar