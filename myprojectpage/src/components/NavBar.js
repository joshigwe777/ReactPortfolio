import { Link } from "react-router-dom";
import logo from "../images/logo.png"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
function NavBar() {
    return <>
        <Navbar className="mb-5" bg="dark" expand="md">
            <Container>
                <Navbar.Brand href="#home"><Link to="/"><img className="logo mr-auto" src={logo} /></Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/myprojectpage/portfolio">Portfolio</Nav.Link>
                        <Nav.Link href="/myprojectpage/experience">Experience</Nav.Link>
                        <Nav.Link href="/myprojectpage/aboutMe">About Me</Nav.Link>
                        <Nav.Link href="/myprojectpage/contactForm">Contact</Nav.Link>
                        <Nav.Link href="/myprojectpage/experience">Experience</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>


    </>
}
export default NavBar;