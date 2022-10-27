import React, { Component } from 'react'
import {Table, Container, Card} from 'react-bootstrap';
import mulunguzi from '../assets/mulunguzi.jpg'
import sangala from '../assets/sangala.jpg';
import umodzi from '../assets/umodzi.jpg'

export default class About extends Component {
    render() {
        return (
          <>
            <div>
              <p>
                Campus maintenance is one of the key factors in maintaining the health and quality of
                CHANCO infrastructure.<br/> There is a need to have a mechanism that will enable students
                and other members of the campus to report issues that need repairing e.g. doors, geysers.<br/>
                Also, keep track of the progress of the different maintenance activities, keep records
                and task allocation at the maintenance section.
              </p>
            </div>
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src={mulunguzi} alt="First slide"/>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src={sangala} alt="Second slide"/>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src={umodzi} alt="Third slide"/>
    </div>
  </div>
</div>
            </>
        )
    }
}
