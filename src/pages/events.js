import { Container, Row, Col, Card, CardBody } from "react-bootstrap";
import { useState, useEffect } from "react";
import "@/styles/pages/events.module.scss";

export default function Events() {
  const [events, setEvents] = useState();
  const events_api = process.env.NEXT_PUBLIC_DOMAIN + "api/events";

  useEffect(() => {
    fetch(events_api)
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);

  return (
    <section id="events">
      <Container>
        {/* Events section header */}
        <Row className="header text-center justify-content-center">
          <Col lg={7}>
            <h1 className="title">Upcoming Events</h1>
            <p className="subtitle">
              Please check our upcoming events and save a date to your
              calendars.
            </p>
          </Col>
        </Row>

        {/* creates cards for each of the events */}
        <Row className="main">
          {events?.data.map((event, index) => {
            return (
              <Col key={index} lg={4}>
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
