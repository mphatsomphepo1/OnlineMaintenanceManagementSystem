import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import HomeSection from './HomeSection';
import About from './About';
import Report from './Report';
import TypeOfFaults from './TypeOfFaults';
import WaterSection from './WaterSection'
import Electricity from './Electricity';
import FurnitureSection from './FurnitureSection';
import OtherSection from './OtherSection';

export default class NavbarComp extends Component {
    render() {
        return (
            <Router>
                <div>

                    <Navbar bg="dark" variant={"dark"} expand="lg">
                        <Navbar.Brand href="#">Campus Maintenance Mgt System</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="mr-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Nav.Link as={Link} to="/home">Home</Nav.Link>
                                <Nav.Link as={Link} to="/about">About</Nav.Link>
                                <Nav.Link as={Link} to="/report">Report Faults</Nav.Link>

                            </Nav>

                        </Navbar.Collapse>
                    </Navbar>
                </div>
                <div>
                    {/* <Switch> */}
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/report">
                            <TypeOfFaults />
                        </Route>
                        <Route path="/home">
                            <HomeSection />
                        </Route>
                        <Route path="/water">
                            <WaterSection />
                        </Route>
                        <Route path="/electricity">
                            <Electricity />
                        </Route>
                        <Route path="/furniture">
                            <FurnitureSection />
                        </Route>
                        <Route path="/other">
                            <OtherSection />
                        </Route>
                    {/* </Switch> */}
                </div>
            </Router>
        )
    }
}
