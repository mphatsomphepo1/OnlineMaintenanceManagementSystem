import React, { useState } from 'react'
import logo from '../assets/log.png'

const Navbar = () => {
  let Links =[
    // {name:"Home",link:"/"},
    {name:"Report",link:"/addreport"},
    // {name:"View",link:"/list"},
    {name:"Login",link:"/login"},
    // {name:"About",link:"/about"},
  ];
  let [open,setOpen]=useState(false);
return (
  <div className='bg-indigo-800'>
    <div className='md:flex items-center justify-between bg-gray-800 py-2 md:px-10 px-7'>
    <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
    text-gray-800'>
      <div className='text-3xl text-white-600 mr-1 pt-2'>
      <img src={logo} alt='logo' className='h-12'/>
      </div>
      <p className='text-white font-bold'>Campus Mgt System</p>
    </div>
    
    <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
    <ion-icon name={open ? 'close':'menu'}></ion-icon>
    </div>

    <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-gray-800 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
      {
        Links.map((link)=>(
          <li key={link.name} className='md:ml-8 text-white font-bold md:my-0 my-7'>
            <a href={link.link} className='text-white hover:text-white-400 duration-500 underline underline-offset-0'>{link.name}</a>
          </li>
        ))
      }
    </ul>
    </div>
  </div>
)
}

export default Navbar