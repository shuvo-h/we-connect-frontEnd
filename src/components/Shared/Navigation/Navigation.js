
import React, { useEffect, useState } from "react";
import { NavLink } from 'react-router-dom';
import { Container, Nav, Navbar, } from 'react-bootstrap';
import logo from "../../../Assets/we_connect_logo.png"

const Navigation = () => {

    const [isSticky, setSticky] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                setSticky(true)
            } else {
                setSticky(false)
            }
        })
    }, []);
    return (
        <div>
            <Navbar bg="light" expand="lg" className={(isSticky) ? "navbar  navbar-expand-lg navbar-dark bg-dark fixed-top" : "navbar  navbar-expand-lg navbar-light color text-dark"}>
                <Container>
                    <Nav.Link as={NavLink} to="/home"><Navbar.Brand href="#home"> <img src={logo} alt="" /></Navbar.Brand></Nav.Link>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto align-items-center">
                            <Nav.Link as={NavLink} to="/home">Home</Nav.Link>

                            <Nav.Link as={NavLink} to="/services">Services</Nav.Link>
                            <Nav.Link as={NavLink} to="/contact">Contact</Nav.Link>

                            <Nav.Link as={NavLink} to="/about">About</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    );
};

export default Navigation;