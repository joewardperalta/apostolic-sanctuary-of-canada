import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function MainNav() {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img className="logo" src="/church-logo.png" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-menu" />
        <Navbar.Collapse id="navbar-menu">
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>

            <NavDropdown title="Gatherings" id="gatherings-nav-dropdown">
              <NavDropdown.Item href="/ministries-and-services">
                Ministries & Services
              </NavDropdown.Item>
              <NavDropdown.Item href="/events">Events</NavDropdown.Item>
              <NavDropdown.Item href="/location">Location</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Get Connected" id="get-connected">
              <NavDropdown.Item href="/kids">Kids Group</NavDropdown.Item>
              <NavDropdown.Item href="/youth">Youth Group</NavDropdown.Item>
              <NavDropdown.Item href="/ladies">Ladies Group</NavDropdown.Item>
              <NavDropdown.Item href="/mens">Mens Group</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="/give">Give</Nav.Link>
            <Nav.Link href="/contact">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
