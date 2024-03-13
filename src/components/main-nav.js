import { Container, Nav, Navbar, Button, Offcanvas } from "react-bootstrap";
import Link from "next/link";
import { useRouter } from "next/router";

export default function MainNav() {
  const router = useRouter();

  const navNames = [
    "Home",
    "About Us",
    "Ministries & Services",
    "Events",
    "Location",
  ];

  const navLinks = [
    "/",
    "/about",
    "/ministries-and-services",
    "/events",
    "location",
  ];

  // Change the active nav items
  function handleClick(e) {
    let currentActivePage = document.getElementsByClassName("active");
    currentActivePage[0].classList.remove("active");
    e.target.classList.add("active");
  }

  return (
    <Navbar expand="xl">
      <Container>
        <Navbar.Brand>
          <Link href="/">
            <img className="logo" src="/church-logo.png" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-xl`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-xl`}
          aria-labelledby={`offcanvasNavbarLabel-expand-xl`}
          placement="start"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>
              <img className="logo" src="/church-logo.png" />
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className="d-flex align-items-center flex-column flex-xl-row p-5 p-xl-0">
            {/* Nav items */}
            <Nav className="justify-content-end flex-grow-1 text-center">
              {navLinks.map((value, index) => (
                <Nav.Item key={index}>
                  <Link
                    className={
                      value === router.pathname ? "nav-link active" : "nav-link"
                    }
                    href={value}
                    onClick={(e) => handleClick(e)}
                  >
                    {navNames[index]}
                  </Link>
                </Nav.Item>
              ))}
            </Nav>

            {/* Nav item for contact us */}
            <Nav className="justify-content-end flex-grow-1 text-center">
              <Button variant="secondary" id="contact-us-button">
                <Link
                  className={
                    router.pathname === "/contact"
                      ? "nav-link active"
                      : "nav-link"
                  }
                  href="/contact"
                  id="contact-us-link"
                  onClick={(e) => handleClick(e)}
                >
                  <i
                    className="fa-solid fa-phone me-3 me-lg-0"
                    style={{ color: "#25db00" }}
                  ></i>
                  Contact Us
                </Link>
              </Button>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}
