import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css';
// import Mulunguzi from '../assets/mulunguzi.jpg'

function Heropg () {
    
    return (
      <>
        <div className="home" >
          <div className="headerContainer">
            <h1>Campus Maintenance Management System</h1>
            <p>Report Campus Maintenance Issues</p>
            <Link to='/login'><button className='btn-log'>Login as Admin</button></Link>
            <Link to='/user'><button className='btn-lo'>Login as Student</button></Link>
          </div>
        </div>
      </>
    )
  }


export default Heropg