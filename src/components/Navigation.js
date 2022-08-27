import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

const Navigation = () => {
  return (
    <Navbar variant="dark" expand="lg" className="navigation sticky-top">
      <Container className="navigation__container">
        <Navbar.Brand href="#" className="navigation__brand">
          Keffri Neal
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="navigation__toggle"
        />
        <Navbar.Collapse className="navigation__collapse">
          <Nav className="me_auto navigation__nav">
            <Nav.Link href="#about" className="navigation__li">
              About
            </Nav.Link>
            <Nav.Link href="#skills" className="navigation__li">
              Skills
            </Nav.Link>
            <NavDropdown
              title="Projects"
              id="basic-nav-dropdown"
              className="navigation__dropdown"
            >
              <NavDropdown.Item href="#projects/3.1">
                Where's Waldo
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#projects/3.2">
                Personal Portfolio
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#projects/3.3">
                Vegan Check
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#contact" className="navigation__li">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
