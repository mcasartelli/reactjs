import React from "react";
import "./navbar.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from "../CartWidget/CartWidget";

const NavbarMenu = ({links}) => {
    const listItems = links.map((link) =>
        <Nav.Link href={link.link} title={link.title}>{link.name}</Nav.Link>
        );


    return(
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">React eStore</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">

                    {listItems}

                    {/*<NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                            Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                            Separated link
                        </NavDropdown.Item>
                    </NavDropdown>*/}
                </Nav>
                <Nav.Link href="#home"> <CartWidget/></Nav.Link>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </>
    )
}

export default NavbarMenu;