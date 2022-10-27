import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css';
import Mulunguzi from '../assets/mulunguzi.jpg'

function Heropg () {
    
    return (
      <>
        <div className="home" style={{backgroundImage: `url(${Mulunguzi})`}}>
          <div className="headerContainer">
            <h1>Campus Facility Maintenance System</h1>
            <p>Report Campus Maintenance Issues</p>

            <Link to='/report'><button className='btn'>Report Now</button></Link>
          </div>
        </div>
      </>
    )
  }


export default Heropg