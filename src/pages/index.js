import { Button, Col, Row, Container } from "react-bootstrap";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section id="hero-section">
        <Container id="hero-description">
          <Row>
            <Col md={12} lg={6}>
              <h1 className="title">
                Jesus is the <span className="bold big-text">Way</span> the{" "}
                <span className="bold big-text">Truth</span> and the{" "}
                <span className="bold big-text">Life</span>.
              </h1>
              <p className="subtitle">
                Welcome to The Apostolic Sanctuary of Canada.
              </p>
              <Button variant="primary">
                <Link href="/ministries-and-services">
                  Visit our church
                  <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
