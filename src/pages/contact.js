import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";

export default function Contact() {
  return (
    <section id="contact-us-page">
      <Container className="text-center">
        <Row className="section-heading">
          <Col lg={7}>
            <h1 className="title">Contact Us</h1>
            <p className="subtitle">
              If you have any questions and concerns please contact us.
            </p>
          </Col>
        </Row>
        <Row className="section-main">
          <Col lg={4}>
            <div className="icon-container">
              <i className="fa-solid fa-location-dot"></i>
            </div>
            <h5>Address</h5>
            <p>3-1177 Finch Ave W, North York, ON M3J 2E9</p>
            <ul>
              <li>Monday: 12-4pm</li>
              <li>Wednesday: 7-10pm</li>
              <li>Friday: 7:30-11:30pm</li>
              <li>Saturday: 5-9pm</li>
              <li>Sunday: 10am-3pm</li>
            </ul>
          </Col>
          <Col lg={4}>
            <div className="icon-container">
              <i className="fa-solid fa-mobile-screen-button"></i>
            </div>
            <h5>Phone</h5>
            <p>(416) 421-0994</p>
          </Col>
          <Col lg={4}>
            <div className="icon-container">
              <i className="fa-solid fa-at"></i>
            </div>
            <h5>Email</h5>
            <Link href="mailto:myapostolicsanctuary@gmail.com">
              myapostolicsanctuary@gmail.com
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
