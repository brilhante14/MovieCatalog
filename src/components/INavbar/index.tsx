import React from "react";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./styles.css";
import { Link } from "react-router-dom";

import searchIcon from '../../assets/search.svg';
export default function INavbar() {
   return(
      <>
      <Navbar id="navbar" expand="lg"  variant="dark" fixed="top">
      <Container >
      <Navbar.Brand as={Link} to="/">Movie Catalog</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="nav-container">
      <Nav >
        <Nav.Link as={Link} to="/popular">Popular</Nav.Link>
        <Nav.Link as={Link} to="/releases">Releases</Nav.Link>
        <NavDropdown title="Genres">
          <NavDropdown.Item as={Link} to="/genres/10751">Family</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/genres/18">Drama</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/genres/28">Action</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/genres/10749">Romance</NavDropdown.Item>
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