import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

const MyNav = () => {
  return (
    <Navbar variant="dark" bg="dark" className="navbar">
      <Navbar.Brand href="#home">Book Search</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">About</Nav.Link>
        <Nav.Link href="#pricing">Browse</Nav.Link>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="mr-2"
          aria-label="Search"
        />
        <Button variant="outline-secondary">Search</Button>
      </Form>
    </Navbar>
  );
};

export default MyNav;
