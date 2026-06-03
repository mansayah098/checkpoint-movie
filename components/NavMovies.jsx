import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import {useContext} from "react";
import { MoviesContext } from "./MovieContext";
import '../css/NavMovies.css';

const NavMovie = () => {
  const { searchTerm, setSearchTerm } = useContext(MoviesContext);

  return (
    <Container fluid>
      <Navbar expand="lg" className="custom-navbar" data-bs-theme="dark">
        <Container fluid>
       <Navbar.Brand>
 <img
  src="/images/logoMovie.png"
  alt="Logo "
  width="90"
  height="90"
  className="d-inline-block align-top"
/>

</Navbar.Brand>

          <Form className="d-flex ms-auto search-form">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button variant="outline-light">Go</Button>
          </Form>
        </Container>
      </Navbar>

      <Navbar className="navHome" data-bs-theme="dark">
        <Container>
          <Nav className="mx-auto">
            <NavLink to="/"   className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
              Home
            </NavLink>
            <NavLink to="/movies/romantique"   className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
              Films Romantiques
            </NavLink>
            <NavLink to="/movies/horreur" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
              Films Horreur
            </NavLink>
            <NavLink to="/movies/action" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
              Films Action
            </NavLink>
            <NavLink to="/dashboard" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
              Dashboard
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </Container>
  );
};

export default NavMovie;
