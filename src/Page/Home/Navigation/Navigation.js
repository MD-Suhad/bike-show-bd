import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import banner from "../../../images/banner.png";
import logo from "../../../images/logo.png";
import useAuth from "../../Hooks/useAuth";
import "./Navigation.css";

const Navigation = () => {
  const { user, logOut } = useAuth();
  return (
    <div className="navigation-bar">
      <Navbar variant="dark" expand="lg">
        {/* className="banner" */}
        <Container>
          <h2><span style={{color:'aqua'}}>BIKE</span> <span style={{color:'yellow'}}>SHOW</span> <span style={{color:'orange'}}>BD</span></h2>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            className="justify-content-end navigation"
            id="basic-navbar-nav"
          >
            <Nav>
              <Navbar.Text>
                <div className="nav-component fs-5">
                  <Link to="/home">Home</Link>
                  <Link to="/products">Products</Link>
                  <Link to="/userReview">UserReviews</Link>
                  <Link to="/blogs">Blogs</Link>

                  {user?.email ? (
                    <>
                      <Link to="/dashboard">Dashboard</Link>
                      <Button
                        onClick={logOut}
                        style={{backgroundColor:'aqua',color:'black'}}
                        className=" border-0 ms-2"
                        // variant="dark"
                      >
                        Logout
                      </Button>
                      <span style={{backgroundColor:'rgba(0, 255, 255, 0.247)',borderRadius:'7px'}} className="ms-2 text-light pt-1 px-3 pb-2">
                        Signed in as:{" "}
                        {user.displayName
                          ? `${user.displayName}`
                          : `${user.email}`}
                      </span>
                    </>
                  ) : (
                    <Link to="/login">Login</Link>
                  )}
                </div>
              </Navbar.Text>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
