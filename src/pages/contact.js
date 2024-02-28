import { Container, Row, Col } from "react-bootstrap";

export default function Contact() {
  return (
    <section id="contact-us-page">
      <Container className="text-center">
        <Row className="section-heading">
          <Col lg={7}>
            <h1 className="title">Contact Us</h1>
            <p className="subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </Col>
        </Row>
        <Row className="section-main">
          <Col>
            <div className="icon-container">
              <i className="fa-solid fa-location-dot"></i>
            </div>
            <h5>Address</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </Col>
          <Col>
            <div className="icon-container">
              <i className="fa-solid fa-mobile-screen-button"></i>
            </div>
            <h5>Phone</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </Col>
          <Col>
            <div className="icon-container">
              <i className="fa-solid fa-at"></i>
            </div>
            <h5>Email</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
