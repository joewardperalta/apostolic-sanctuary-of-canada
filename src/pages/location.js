import { Container, Row, Col } from "react-bootstrap";

export default function Location() {
  return (
    <section id="location-page">
      <Container>
        <Row className="section-heading text-center">
          <Col lg={7}>
            <h1 className="title">Church Location</h1>
            <p className="subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </Col>
        </Row>
        <Row className="section-main">
          <Col lg={6}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2881.3855551732026!2d-79.48379562346472!3d43.764854845201626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2f3051c56469%3A0xce4780a9dd79ca75!2sThe%20Apostolic%20Sanctuary%20of%20Canada%20Inc.!5e0!3m2!1sen!2sca!4v1709131376365!5m2!1sen!2sca"
              width="600"
              height="450"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
