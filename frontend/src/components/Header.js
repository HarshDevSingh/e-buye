import React from "react";
import {
  Navbar,
  Nav,
  FormControl,
  Form,
  Button,
  Container,
} from "react-bootstrap";
const Header = () => {
  return (
    <header>
      <Navbar bg="light" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand href="/">E-buyee</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/cart">
                <i
                  className="fas fa-shopping-cart"
                  style={{ paddingRight: "3px" }}
                ></i>
                Cart
              </Nav.Link>
              <Nav.Link href="/login">
                <i className="fas fa-user" style={{ paddingRight: "3px" }} />
                Login
              </Nav.Link>
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="secondary">Search</Button>{" "}
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
