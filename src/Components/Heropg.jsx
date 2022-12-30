import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css';
// import Mulunguzi from '../assets/mulunguzi.jpg'

function Heropg () {
    
    return (
      <>
        <div className="home" >
          <div className="headerContainer">
            <h1>Campus Maintenance Mgt System</h1>
            <p>Report Campus Maintenance Issues</p>
            <Link to='/addreport'><button className='btn'>Report Now</button></Link>
            <Link to='/login'><button className='btn'>View Reports</button></Link>
          </div>
        </div>
      </>
    )
  }


export default Heropg