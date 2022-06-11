import React from "react";
import { Link } from "gatsby";
import { Navbar, Nav, Container } from "react-bootstrap";

const Navigation = (props) => (
  <Navbar bg="dark" variant="dark" expand="lg">
    <Container>
      <Link to="/" style={{ textDecoration: "none" }}>
        <Navbar.Brand>
          <strong>{props.brand}</strong>
        </Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link
            className="nav-link"
            activeClassName="nav-link active"
            to="/bio"
          >
            Profile
          </Link>
          <Link
            className="nav-link"
            activeClassName="nav-link active"
            to="/photography"
          >
            Photography
          </Link>
          <Link
            className="nav-link"
            activeClassName="nav-link active"
            to="/vector"
          >
            Vector
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Navigation;
