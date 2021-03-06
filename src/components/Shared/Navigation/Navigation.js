import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../../Assets/we_connect_logo.svg";
import useAuth from "../../../hooks/useAuth";

const Navigation = () => {
  const { user, logOut } = useAuth();
  const [isSticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    });
  }, []);
  return (
    <div>
      <Navbar
        bg="light"
        expand="lg"
        className={
          isSticky
            ? "navbar  navbar-expand-lg navbar-dark bg-dark fixed-top"
            : "navbar  navbar-expand-lg navbar-light color text-dark"
        }
      >
        <Container>
          <Nav.Link as={NavLink} to="/home">
            <Navbar.Brand href="#home">
              {" "}
              <img src={logo} style={{ width: 157 }} alt="" />
            </Navbar.Brand>
          </Nav.Link>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center">
              <Nav.Link as={NavLink} to="/home">
                Home
              </Nav.Link>

              <Nav.Link as={NavLink} to="/services">
                Services
              </Nav.Link>
              <Nav.Link as={NavLink} to="/contact">
                Contact
              </Nav.Link>
              <Nav.Link as={NavLink} to="/users">
                Providers
              </Nav.Link>
              <Nav.Link as={NavLink} to="/dashboard/my">
                Dashboard
              </Nav.Link>

              <Nav.Link as={NavLink} to="/about">
                About
              </Nav.Link>
              {user.email ? (
                <>
                  <Nav.Link
                    as={NavLink}
                    to="/"
                    className="border-0 bg-transparent pe-none"
                  >
                    {`${user.displayName} `}{" "}
                  </Nav.Link>
                  <button className="border-0 ">
                    <i
                      onClick={logOut}
                      className="cursor-pointer fas fa-sign-out-alt ms-2"
                    ></i>
                  </button>
                </>
              ) : (
                <Nav.Link as={NavLink} to="/login">
                  login
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
