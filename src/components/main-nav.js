import { Container, Nav, Navbar, NavDropdown, Button } from "react-bootstrap";

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
            </NavDropdown>
            <Nav.Link href="/location">Location</Nav.Link>
            <Nav.Link href="/contact">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
