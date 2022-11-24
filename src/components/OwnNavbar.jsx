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
                <Navbar.Brand href="#home">MilaO Makeup</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Colección</Nav.Link>
                        <NavDropdown title="Productos" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Eyeliners</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Lipsticks
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Giftcards</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                About Us
                            </NavDropdown.Item>
                        </NavDropdown>
                        <CartWidget cantidad ="4" />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default OwnNavbar