import React, { Component } from 'react'

import { Table } from 'react-bootstrap'

export default class FaultList extends Component {
    render() {
        return (
          <Container style={{ marginTop:"20px", height: "200px", width:"50%"}}>
          <Card  bg="light" text="dark">
          <h2> Fault List</h2>
          <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>room Number</th>
              <th>Fault Name</th>
              <th>Description</th>
              <th>Room </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Electrical fault</td>
              <td>Bulb failure</td>
              <td>Kenyetta</td>
            </tr>
            <tr>
              <td>20</td>
              <td>Water fault</td>
              <td>Water Linkage in bathrooms</td>
              <td>Beit Trust</td>
            </tr>
          </tbody>
        </Table>
        </Card>
        </Container>
          );
    }
}
