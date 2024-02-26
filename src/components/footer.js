import { Container, Row, Col, Button } from "react-bootstrap";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <section id="footer-section">
        <Container>
          <Row id="footer-contacts">
            <Col>
              <img className="logo" src="/church-logo.png" alt="church logo" />
            </Col>
            <Col>
              <div>
                <p>
                  <i class="fa-solid fa-phone"></i>
                  (123) 456-7890
                </p>
              </div>
              <div>
                <Link href="mailto:sample@gmail.com">
                  <i class="fa-solid fa-envelope-open-text"></i>
                  sample@gmail.com
                </Link>
              </div>
            </Col>
          </Row>

          <Row id="footer-navigations">
            <Col lg={5}>
              <h4>
                Join us in The Apostolic Sanctuary of Canada as we glorify and
                praise our one true God Jesus Christ.
              </h4>
              <Button variant="secondary">
                <Link href="ministries-and-services">
                  Get involve in the ministry
                  <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </Button>
            </Col>
            <Col>
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
                      <Link href="/give">Give</Link>
                    </li>
                    <li>
                      <Link href="/contact">Contact Us</Link>
                    </li>
                  </ul>
                </Col>
              </Row>
            </Col>
          </Row>

          <Row id="footer-license">
            <Col>
              <p>&copy; 2024 by The Apostolic Sanctuary of Canada.</p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
