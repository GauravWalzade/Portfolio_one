import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { HiBars2 } from "react-icons/hi2";
import {links} from "./../data/data.js";
import { Link } from "react-scroll";
import { Link as RouteLink } from "react-router-dom";


const TopNavbar = () => {
  return (
    <>
      <Navbar
        collapseOnSelect
        fixed="top"
        expand="lg"
        style={{ backgroundColor: "#000", borderBottom: "solid 2px #fff" }}
      >
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav">
            <HiBars2 style={{ color: "#fff" }} />
          </Navbar.Toggle>
          <Navbar.Brand  className="logo">
            <RouteLink to="/"><img
             src={process.env.PUBLIC_URL + "images/trans_logo.png"}
              style={{ height: "25px", width: "40px" }}
              alt=""/></RouteLink>

          </Navbar.Brand>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              {
                links.map((link, i) => (
                  
                 <Link to={link} spy={true} smooth={true} offset={-50} duration={500} key={i} className="nav-link nav-link-navbar"  style={{ color: "#fff", listStyle: "none", fontSize: "15px" }}>{link}</Link>
                  
                ))
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default TopNavbar;
