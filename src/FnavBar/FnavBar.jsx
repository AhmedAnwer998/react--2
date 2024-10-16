import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import "./FnavBar.css";
import { HashLink } from "react-router-hash-link";
import { NavLink } from "react-router-dom";

function FnavBar() {
  return (
    <Navbar expand="lg">
      <Container className="navSec d-flex justify-content-between align-items-center">
        <NavLink>
          <img className="img1" src="/Images/img1.png" alt="img1" />
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <HashLink to="/#latest-builds" className="text-white txt">
              Latest Builds
            </HashLink>
            <HashLink to="/#process" className="text-white txt">
              Process
            </HashLink>
            <HashLink to="/#services" className="text-white txt">
              Services
            </HashLink>
            <HashLink to="/#contact-us" className="text-white txt">
              Contact Us
            </HashLink>
            <HashLink to="/projects" className="text-white txt">
              Projects
            </HashLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default FnavBar;
