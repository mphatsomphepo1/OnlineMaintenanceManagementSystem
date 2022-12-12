import React, { Component } from 'react'
import {Form, Container, Card, Button} from 'react-bootstrap';
import ReportService from '../Services/ReportService';

export default class Report extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: "",
            faultName: "",
            description: "",
            roomNo:""
        }
        this.changeFaultName = this.changeFaultName.bind(this)
        this.changeDesc = this.changeDesc.bind(this)
        this.changeRoom = this.changeRoom.bind(this)
        this.save = this.save.bind(this)
    }

    save = (e) => {
        e.preventDefault();
        let fault = {faultName: this.state.faultName, description: this.state.description, roomNo: this.state.roomNo};
        console.log('faults' + JSON.stringify(fault));

        ReportService.saveFaults(fault).then(res =>{
            this.props.history.push('/list')
        })
    }
    changeFaultName = (event) =>{
        this.setState({faultName: event.target.value});
    }
    changeDesc = (event) =>{
        this.setState({description: event.target.value});
    }
    changeRoom = (event) =>{
        this.setState({roomNo: event.target.value});
    }
    
    render() {
        return (
            <Container style={{ marginTop:"20px", height: "200px", width:"50%"}}>
            <Card bg="light" style={{marginTop:"20px", marginBottom:"20px", Button: "center"}}>
                <h2>Reporting Section</h2>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Fault</Form.Label>
                        <Form.Control type="text" placeholder="faultname" 
                        value={this.state.faultName} onChange={this.changeFaultName}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea">
                        <Form.Label>Room</Form.Label>
                        <Form.Control type="text" placeholder="room" 
                          value={this.state.roomNo} onChange={this.changeRoom}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea">
                        <Form.Label>description</Form.Label>
                        <Form.Control type="text" placeholder="desc" 
                        value={this.state.description} onChange={this.changeDesc}/>
                    </Form.Group>
                    <Button variant="success" onClick={this.save}>Submit</Button>{' '}
               </Form>
            </Card>
        </Container>
        )
    }
}
