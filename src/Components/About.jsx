import React, { Component } from 'react'
import "./About.css";

function About() {
    return (
      <div>
      <h3>Get To Know About Us</h3>
      <div className='main-container'>
      
          <section className='about-rgm'>
              <h4>What is Campus Maintenance Mgt System  ? </h4>
              <p className='Par'>
              Campus maintenance is one of the key factors in maintaining the health and quality of
              CHANCO infrastructure.<br/> There is a need to have a mechanism that will enable students
              and other members of the campus to report issues that need repairing e.g. doors, geysers.<br/>
              Also, keep track of the progress of the different maintenance activities, keep records
              and task allocation at the maintenance section.
            </p>
          </section>
      </div>
      </div>
    )
}

export default About;
