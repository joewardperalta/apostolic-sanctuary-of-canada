import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Button,
  Offcanvas,
} from "react-bootstrap";

export default function MainNav() {
  return (
    <Navbar expand="md">
      <Container>
        <Navbar.Brand href="/">
          <img className="logo" src="/church-logo.png" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-md`}
          aria-labelledby={`offcanvasNavbarLabel-expand-md`}
          placement="start"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>
              <img className="logo" src="/church-logo.png" />
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className="d-flex align-items-center">
            <Nav className="justify-content-end flex-grow-1 text-center">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/ministries-and-services">Services</Nav.Link>
              <Nav.Link href="/events">Events</Nav.Link>
              <Nav.Link href="/location">Location</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}
