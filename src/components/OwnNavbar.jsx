import { Link } from 'react-router-dom';
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import NavDropdown from "react-bootstrap/NavDropdown"
import { FaShoppingCart } from "react-icons/fa";
import CartWidget from "./CartWidget";



const OwnNavbar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/"><img src="./imagenes/logo.png" alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Colección</Nav.Link>
                        <NavDropdown title="Productos" id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to="categoria/2">Rostro</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="categoria/1">
                                Labios
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Giftcards</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                About Us
                            </NavDropdown.Item>
                        </NavDropdown>
                        {/* <CartWidget cantidad ="4" /> */}
                        <Nav.Link>Login</Nav.Link>
                        <Nav.Link>Registrarse</Nav.Link>
                        <Nav.Link><CartWidget cantidad="4"/> </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default OwnNavbar