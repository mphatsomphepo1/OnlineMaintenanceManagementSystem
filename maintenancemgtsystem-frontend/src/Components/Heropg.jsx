import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUndo } from "@fortawesome/free-solid-svg-icons";


function Heropg () {
    const marginTop = {
        marginTop: "20px",
        alignItems: "center",
        position: "center", 
        height: "400px", 
        width: "70%",
        Button: "center"
    };
    return (
      <div>
        <Container style={{ marginLeft: "170px" }}>
            <Row>
                <Card bg="dark" text="light" style={marginTop}>
                    <Card.Body>
                         <Col lg={12} >
                                <h1>Hello Chanco!</h1>
                                <p>
                                    Welcome to Campus maintenance Mgt System, a platform which is one of the key factors in maintaining
                                    the health and quality of CHANCO infrastructure.
                                    The main Objective of this System is to enable students to report Maintenance issues sorrounding chanco 
                                    and to their hostels.
                                </p>
                            </Col>
                     </Card.Body>
                  </Card>
            </Row>
        </Container>
      </div>
    )
  }


export default Heropg