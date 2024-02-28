import { Container, Row, Col, Card, CardBody } from "react-bootstrap";
import { useState, useEffect } from "react";

export default function Events() {
  const [events, setEvents] = useState();

  useEffect(() => {
    fetch("http://localhost:3000/api/events")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);

  console.log(events);

  return (
    <section id="events-page">
      <Container>
        <Row className="section-heading text-center">
          <Col lg={7}>
            <h1 className="title">Upcoming Events</h1>
            <p className="subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </Col>
        </Row>

        {/* creates cards for each of the events */}
        <Row className="section-main">
          {events?.data.map((event, index) => {
            return (
              <Col key={index} className="card-container" lg={4}>
                <Card>
                  <Card.Img
                    variant="top"
                    src={event.img.src}
                    alt={event.img.alt}
                  />
                  <Card.Body>
                    <Card.Title>
                      <h5>{event.title}</h5>
                    </Card.Title>
                    <Card.Subtitle className="mb-3 text-muted">
                      {event.subtitle}
                    </Card.Subtitle>
                    <Card.Text>{event.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
}
