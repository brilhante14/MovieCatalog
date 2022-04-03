import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

import searchIcon from '../../assets/search.svg';

import "./styles.css";

type InputEvent = React.ChangeEvent<HTMLInputElement>;

export default function INavbar() {
  const [inputSearch, setInputSearch] = useState("");
  
  const handleChange = (e: InputEvent): void => {
    setInputSearch(e.target.value);
  };
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
          <NavDropdown.Item as={Link} to="/genres">See all</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <div className="input-container">
        <input
          className="input-search"
          type="text"
          placeholder="Search"
          onChange={handleChange}
          aria-label="Search"
        />
        
        <Link to={`/search/${inputSearch}`} className="btn-search">
          <img src={searchIcon} alt="Search Button" className="imgSvg" />
        </Link>
      </div>
      </Navbar.Collapse>

      </Container>
    </Navbar>
    </>
   );
}