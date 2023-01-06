import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/log.png'
import './Navbar.css'

const Navbar = () => {
  let Links =[
    {name:"Home",link:"/"},
    {name:"Report",link:"/user"},
    {name:"About",link:"/about"},
  ];
  let [open,setOpen]=useState(false);
return (
  <div className='bg-indigo-100 '>
    <div className='md:flex items-center justify-between bg-gray-800 py-2 md:px-10 px-7'>
    <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
    text-gray-800'>
      <div className='text-3xl text-white-600 mr-1 pt-2'>
      <img src={logo} alt='logo' className='h-12'/>
      </div >
	  <div className="Deco"><p className='text-white font-bold font-size-10 margin-top-20%'> Campus maintenance management System </p>
	  </div>
    </div>
    <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-gray-800 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
      {
        Links.map((link)=>(
          <li key={link.name} className='md:ml-8 text-white font-bold md:my-0 my-7'>
            <div className='links'>
            <a href={link.link} className='text-white'>{link.name}</a>
            </div>
          </li>
        ))
      }
    </ul>
    </div>
  </div>
)
}

export default Navbar