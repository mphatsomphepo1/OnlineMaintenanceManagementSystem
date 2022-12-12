import React, { Component } from 'react'
import { Card, Container } from 'react-bootstrap'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
export default class TypeOfFaults extends Component {
   
  render() {
    return (
      <div>
        <h2>Select type of Fault</h2>
        <Container style={{ border: "center", height: "100%", width:"70%" }}>
         <Card bg="light" style={{marginTop:"20px", marginBottom:"20px", width: "50%"}}>
            <Link to="/water"><Button variant="outlined" style={{width: "100%"}}>Water</Button></Link>
            <Link to="/electricity"><Button variant="outlined" style={{width: "100%"}}>Electricity</Button></Link>
            <Link to="/furniture"><Button variant="outlined" style={{width: "100%"}}>Furniture</Button></Link>
            <Link to="/other"><Button variant="outlined" style={{width: "100%"}}>Other</Button></Link>           
            </Card>
         </Container>
      </div>
    )
  }
}
