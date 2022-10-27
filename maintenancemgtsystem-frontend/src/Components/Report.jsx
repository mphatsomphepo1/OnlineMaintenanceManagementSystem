import React, { Component } from 'react'
import {Form, Container, Card, Button} from 'react-bootstrap';

export default class Report extends Component {
    
    render() {
        return (
            <Container style={{ marginTop:"20px", height: "200px", width:"50%"}}>
            <Card bg="light" style={{marginTop:"20px", marginBottom:"20px", Button: "center"}}>
                <h2>Reporting Section</h2>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Fault</Form.Label>
                        <Form.Control type="text" placeholder="faultname" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Room Name</Form.Label>
                        <Form.Control type="text" placeholder="hostelname" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Room Number</Form.Label>
                        <Form.Control type="text" placeholder="room_number" />
                    </Form.Group>
                    {/* <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Date Occured</Form.Label>
                        <Form.Control type="date" placeholder="occured" />
                    </Form.Group> */}
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Fault Description</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    <Button variant="success">Submit</Button>{' '}
               </Form>
            </Card>
        </Container>
        )
    }
}
