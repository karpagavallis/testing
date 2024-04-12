import React, { Component } from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, Route, Router, Routes } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AboutMe from "./AboutMe";
import WhoAm from "./WhoAm";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

export default class NavFile extends Component {
    render() {
        return <>
            <Navbar expand="lg" sticky="top" className="navbg">
                <div className="container-fluid">  
                    <Navbar.Brand as={Link} to="/" className="d-md-none">KarpagavalliS</Navbar.Brand>                    
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />                    
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/aboutme">About Me</Nav.Link>
                            <Nav.Link as={Link} to="/portfolio">Portfolio</Nav.Link>
                            <Nav.Link as={Link} to="/contact">Contact Me</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>                   
                </div>
            </Navbar>
            <Routes>
                <Route path="/" element={<WhoAm />} />
                <Route path="/aboutme" element={<AboutMe />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>

        </>
    }
}