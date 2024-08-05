import { Button, Col, Row } from "react-bootstrap";
import React from "react";

const Header = () => {
  return (
    <header className="navbarr text-center">
      <Row className="header">
        <Col>
          <h1>Voting Website</h1>
        </Col>
        <Col>
          <Button className="m-2">Login</Button>
          <Button className="m-2 bg-white text-black">Register as Voter</Button>
        </Col>
      </Row>
    </header>
  );
};

export default Header;
