import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import logo from "../../../images/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-dark p-5 mt-5 text-light">
      <Row>
        <Container className="d-flex justify-content-between">
          <Col>
            <div className="icon">
              <div className="d-flex">
              <h2><span style={{color:'aqua'}}>BIKE</span> <span style={{color:'yellow'}}>SHOW</span> <span style={{color:'orange'}}>BD</span></h2>
                <br />
              </div>
              <p className='mt-4'>
              BIKE SELL BD is the combination of first ever e-commerce and re-commerce marketplace in Bangladesh where customers can purchase anything by personalized orders as well as sell their unneeded/surplus products such as smartphones, laptops, appliances, vehicles, etc. and exchange also.
<br/>
BIKE SELL BD arranges personalized orders for customers and delivers at their door steps. Hence, customers need not to worry about buying daily groceries or shopping some high-end gadgets, etc. BIKE SELL BD works as one-stop solution for its valuable customers whether it is about buying, selling or exchanging with whatever products they want.
              </p>
            </div>
          </Col>
          <Col>
            <div>
              <h2 className="text-center">Information</h2>
              <hr />
              <div className="me-5 mx-5 d-flex flex-column">
                <Link>About Us</Link>
                <Link>Blogs</Link>
                <Link>Our Races</Link>
                <Link>Work Shop</Link>
              </div>
            </div>
          </Col>
          <Col>
            <div>
              <h2 className="text-center">Support</h2>
              <hr />
              <div className="me-5 mx-5 d-flex flex-column">
                <Link>Contact Us</Link>
                <Link>Help Center</Link>
                <Link>FAQ</Link>
                <Link>Repair Shop</Link>
                <Link>Community</Link>
                <Link>Forum</Link>
              </div>
            </div>
          </Col>
          <hr />
        </Container>
      </Row>
      <hr />
      <p className="text-center">
        <FontAwesomeIcon icon={faCopyright} />All Copyright reserved Bike Sell Bd
      </p>
    </div>
  );
};

export default Footer;
