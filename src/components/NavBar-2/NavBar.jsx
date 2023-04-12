import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";

export const NavBar = () => {
  return (
    <Navbar bg="light" expand="xl">
      <Container>
        <Navbar.Brand href="#home">
          Tienda<span style={{ color: "green" }}>Online</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              <Link to={"/"}>
                <NavDropdown.Item href="#action/3.1">Todos</NavDropdown.Item>
              </Link>

              <Link to={`/category/${"lacteos"}`}>
                <NavDropdown.Item href="#action/3.2">Lacteos</NavDropdown.Item>
              </Link>
              <Link to={`/category/${"congelados"}`}>
                <NavDropdown.Item href="#action/3.2">
                  Congelados
                </NavDropdown.Item>
              </Link>

              <Link to={`/category/${"bebidas"}`}>
                <NavDropdown.Item href="#action/3.2">Bebidas</NavDropdown.Item>
              </Link>
              <Link to={`/category/${"pastas"}`}>
                <NavDropdown.Item href="#action/3.2">Pastas</NavDropdown.Item>
              </Link>
              <Link to={`/category/${"limpieza"}`}>
                <NavDropdown.Item href="#action/3.2">Limpieza</NavDropdown.Item>
              </Link>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
