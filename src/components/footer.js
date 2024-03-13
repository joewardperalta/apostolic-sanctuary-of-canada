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
              <Button variant="secondary">
                <Link href="tel:4164210994">
                  <i className="fa-solid fa-phone"></i>
                  (416) 421-0994
                </Link>
              </Button>
              <Button variant="secondary">
                <Link href="mailto:myapostolicsanctuary@gmail.com">
                  <i className="fa-solid fa-envelope-open-text"></i>
                  myapostolicsanctuary@gmail.com
                </Link>
              </Button>
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
                  <i className="fa-solid fa-arrow-right"></i>
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
              <Link
                className="me-2"
                href="https://www.facebook.com/apostolicsanctuarycanada"
                target="_blank"
              >
                <i
                  className="fa-brands fa-facebook fa-lg"
                  style={{ color: "#005eff" }}
                ></i>
              </Link>
              <Link
                href="https://www.youtube.com/@theapostolicsanctuaryofcan4004"
                target="_blank"
              >
                <i
                  className="fa-brands fa-youtube fa-lg"
                  style={{ color: "#ff0000" }}
                ></i>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
