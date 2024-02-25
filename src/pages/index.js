import { Button, Col, Row, Container, Card } from "react-bootstrap";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
  const [groups, setGroups] = useState();

  useEffect(() => {
    fetch("http://localhost:3000/api/group")
      .then((res) => res.json())
      .then((data) => setGroups(data));
  }, []);

  return (
    <>
      <section id="hero-section">
        <Container>
          <Row className="content">
            <Col md={12} lg={7}>
              <h1 className="title">
                Jesus is the <span className="bold big-text">Way</span> the{" "}
                <span className="bold big-text">Truth</span> and the{" "}
                <span className="bold big-text">Life</span>.
              </h1>
              <p className="subtitle">
                Join us at The Apostolic Sanctuary of Canada Church as we praise
                and worship our one true God Jesus Christ.
              </p>
              <Button variant="secondary">
                <Link href="/ministries-and-services">
                  Visit our church
                  <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="about-section">
        <Container>
          <Row className="content">
            <Col className="info mb-5 mb-lg-0">
              <h2 className="heading">Who We Are</h2>
              <div className="description">
                <p>
                  We are a Filipino Pentecostal Church and our mission is to
                  Carry out the Commission of our Lord Jesus Christ; to preach,
                  teach and make disciples; to serve and help our communities
                  through various ministries and programs; to be the modern day
                  disciples and apostles of our Lord Jesus Christ to carry the
                  Gospel to all nations and people.
                </p>
                <p>
                  We meet in our humble church every Sunday at 11am located in
                  1177 Finch Ave West building number 3. Please see the full
                  details on our ministries and services{" "}
                  <Link href="/minstries-and-services">here</Link>.
                </p>
                <p>
                  Follow us on our Facebook page to know more about us, be
                  updated on upcoming events and watch our live services. We
                  hope to see you soon.
                </p>
                <div className="social-links">
                  <Link
                    className="social-link"
                    href="https://www.facebook.com/apostolicsanctuarycanada"
                    target="_blank"
                  >
                    <i className="fa-brands fa-facebook"></i>
                    Facebook page
                  </Link>
                  <Link
                    className="social-link"
                    href="https://www.youtube.com/@theapostolicsanctuaryofcan4004"
                    target="_blank"
                  >
                    <i className="fa-brands fa-youtube"></i>
                    Youtube channel
                  </Link>
                </div>
              </div>
              <Button variant="secondary">
                <Link href="/about">
                  Learn more
                  <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </Button>
            </Col>

            <Col className="photo me-lg-5" lg={6}>
              <img src="/church-family.jpg"></img>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="community-section">
        <Container>
          {/* Community section heading */}
          <Row>
            <Col className="pe-5" lg={6}>
              <h2 className="heading">
                Get connected with our church community.
              </h2>
              <Button variant="secondary">
                <Link href="/ministries-and-services">
                  Join our Sunday Services
                  <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </Button>
            </Col>
            <Col>
              <p className="subheading">
                We believe that spiritual connections with God and with each
                other are important for our spiritual growth. We are a community
                dedicated to grow in spiritual truth refined on the teaching of
                Jesus Christ, our Lord, and Savior.
              </p>
            </Col>
          </Row>

          {/* List of church departments */}
          <Row className="cards">
            {groups?.data.map((group) => {
              return (
                <Col className="card-container" lg={6}>
                  <Link href="/kids">
                    <Card className="ms-lg-0">
                      <Card.Body>
                        <Card.Title>{group.name}</Card.Title>
                        <Card.Text>{group.description}</Card.Text>
                        <Button variant="secondary">
                          <i className="fa-solid fa-user"></i>
                          Get connected
                        </Button>
                      </Card.Body>
                    </Card>
                  </Link>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
    </>
  );
}
