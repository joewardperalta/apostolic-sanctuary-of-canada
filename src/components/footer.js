import { Container, Row, Col, Button } from "react-bootstrap";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <section className="border-top" id="footer-section">
        <Container>
          <Row id="footer-contacts">
            <Col sm={4}>
              <img className="logo" src="/church-logo.png" alt="church logo" />
            </Col>
            <Col>
              <div className="icon phone-icon">
                <Link href="tel:4164210994">
                  <i className="fa-solid fa-phone"></i>
                  (416) 421-0994
                </Link>
              </div>
              <Link
                className="icon envelope-open-text-icon"
                href="mailto:myapostolicsanctuary@gmail.com"
              >
                <i className="icon envelope-op-icon fa-solid fa-envelope-open-text"></i>
                myapostolicsanctuary@gmail.com
              </Link>
            </Col>
          </Row>

          <Row id="footer-navigations">
            {/* heading */}
            <Col lg={5}>
              <h4>
                Join us in The Apostolic Sanctuary of Canada as we glorify and
                praise our one true God Jesus Christ.
              </h4>
              <Button variant="secondary">
                <Link href="/ministries-and-services">
                  Get involve in the ministry
                  <i className="icon fa-solid fa-arrow-right"></i>
                </Link>
              </Button>
            </Col>

            {/* navigation */}
            <Col className="navigation">
              <Row>
                <Col>
                  <ul>
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <Link href="/about">About</Link>
                    </li>
                    <li>
                      <Link href="ministries-and-services">
                        Ministries and Services
                      </Link>
                    </li>
                    <li>
                      <Link href="/events">Events</Link>
                    </li>
                  </ul>
                </Col>
                <Col>
                  <ul>
                    <li>
                      <Link href="/location">Location</Link>
                    </li>
                    <li>
                      <Link href="/contact">Contact Us</Link>
                    </li>
                  </ul>
                </Col>
              </Row>
            </Col>
          </Row>

          {/* copyright */}
          <Row id="footer-license">
            <Col>
              <p>&copy; 2024 by The Apostolic Sanctuary of Canada.</p>
            </Col>
            <Col className="text-end">
              <div className="social-links">
                <Link
                  className="icon facebook-icon"
                  href="https://www.facebook.com/apostolicsanctuarycanada"
                  target="_blank"
                >
                  <i className="fa-brands fa-facebook"></i>
                </Link>
                <Link
                  className="icon youtube-icon"
                  href="https://www.youtube.com/@theapostolicsanctuaryofcan4004"
                  target="_blank"
                >
                  <i className="fa-brands fa-youtube"></i>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
