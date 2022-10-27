import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {Navbar, Nav } from 'react-bootstrap';
import Heropg from './Heropg';
import ReportSection from './ReportSection';
import Login from './Login'
import Register from './Register';

class Header extends Component {
    render() {
        return (
            <Router>
            <Navbar bg="light" expand="lg">
                <h3>Campus Maintenance Mgt System</h3>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto my-2 my-lg-0">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/reports">Reports</Nav.Link>
                    <Nav.Link as={Link} to="/login">Login</Nav.Link>
                    <Nav.Link as={Link} to="/water">Register</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
            </Navbar>
            <div>
            <Switch>
                <Route path="/">
                    <Heropg />
                </Route>
                 <Route path="/reports">
                    <ReportSection />
                </Route>
                <Route path="/login">
                    <Login />
                </Route> 
                <Route path="/register">
                    <Register />
                </Route>
            </Switch>
        </div>
        </Router>
          );

    }
}

export default Header
