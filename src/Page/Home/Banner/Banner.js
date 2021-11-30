import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <Navbar variant="dark" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            className="justify-content-end"
            id="basic-navbar-nav"
          >
            <Nav>
              <Navbar.Text>
                <div style={{position: "absolute",top: "600px",left:'48%'}}>
                  <Link style={{backgroundColor:'aqua',color:'black'}} className="text-decoration-none rounded p-3 " to="/explore">Explore Our More Products</Link>
                </div>
              </Navbar.Text>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* <img style={{width:"100%", height:"100vh"}} src={banner} alt="" /> */}
    </div>
  );
};

export default Banner;
