import React from "react"
import { Navbar, Nav } from "react-bootstrap"

const Navigation = props => (
  <Navbar bg="dark" variant="dark" expand="lg">
    <Navbar.Brand href="/">
      <strong>{props.brand}</strong>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="/bio">Bio</Nav.Link>
        <Nav.Link href="/blog">Blog</Nav.Link>
        <Nav.Link href="/project">Project</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Navigation
