import React from "react";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./styles.css";

import searchIcon from '../../assets/search.svg';
export default function INavbar() {
   return(
      <>
      <Navbar id="navbar" expand="lg"  variant="dark" fixed="top">
      <Container >
      <Navbar.Brand href="#">Movie Catalog</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="nav-container">
      <Nav >
        <Nav.Link href="#">Popular</Nav.Link>
        <Nav.Link href="#">Releases</Nav.Link>
        <NavDropdown title="Genres">
          <NavDropdown.Item href="#">Drama</NavDropdown.Item>
          <NavDropdown.Item href="#">Romance</NavDropdown.Item>
          <NavDropdown.Item href="#">Action</NavDropdown.Item>
          <NavDropdown.Item href="#">Horror</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#">See all</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <div className="input-container">
        <input
          className="input-search"
          type="text"
          placeholder="Search"
          aria-label="Search"
        />
        
        <Button variant="link" className="btn-search">
          <img src={searchIcon} alt="Search Button" className="imgSvg" />
        </Button>
      </div>
      </Navbar.Collapse>

      </Container>
    </Navbar>
    </>
   );
}