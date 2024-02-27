import { Button, Col, Row, Container, Card } from "react-bootstrap";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
  const [groups, setGroups] = useState();
  const [pastors, setPastors] = useState();

  useEffect(() => {
    fetch("http://localhost:3000/api/groups")
      .then((res) => res.json())
      .then((data) => setGroups(data));

    fetch("http://localhost:3000/api/pastors")
      .then((res) => res.json())
      .then((data) => setPastors(data));
  }, []);

  return (
    <div id="home-page">
      {/* Hero section */}
      <section id="hero-section">
        <Container>
          <Row className="section-main">
            <Col md={12} lg={7}>
              {/* title */}
              <h1 className="title">
                Jesus is the <span className="bold big-text">Way</span> the{" "}
                <span className="bold big-text">Truth</span> and the{" "}
                <span className="bold big-text">Life</span>.
              </h1>

              {/* subtitle */}
              <p className="subtitle">
                Join us at The Apostolic Sanctuary of Canada Church as we praise
                and worship our one true God Jesus Christ.
              </p>

              {/* link to ministries and services page */}
              <Link href="/ministries-and-services">
                <Button variant="secondary">
                  Visit our church
                  <i className="fa-solid fa-arrow-right"></i>
                </Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>

      {/* About section */}
      <section className="border-bottom" id="about-section">
        <Container>
          <Row className="section-main">
            <Col className="info mb-5 mb-lg-0">
              {/* heading */}
              <h2 className="heading">Who We Are</h2>

              {/* about us description */}
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

              {/* link to about page */}
              <Link href="/about">
                <Button variant="secondary">
                  Learn more
                  <i className="fa-solid fa-arrow-right"></i>
                </Button>
              </Link>
            </Col>

            {/* apostolic church family image */}
            <Col className="photo me-lg-5" lg={6}>
              <img src="/church-family.jpg" alt="apostolic church family" />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Community section */}
      <section id="community-section">
        <Container>
          {/* heading */}
          <Row className="section-heading">
            <Col className="pe-5" lg={6}>
              <h2 className="heading">
                Get connected with our church community
              </h2>
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

          {/* list of church departments */}
          <Row className="section-main">
            {groups?.data.map((group, index) => {
              return (
                <Col key={index} className="card-container" lg={6}>
                  <Card>
                    <Card.Body>
                      <Card.Title>{group.name}</Card.Title>
                      <Card.Text>{group.description}</Card.Text>
                      <Button variant="secondary">
                        <i className="fa-solid fa-user"></i>
                        Get connected
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>

      {/* Services section */}
      <section id="services-section">
        <Container>
          <Row>
            {/* heading */}
            <Col className="section-heading" lg={6}>
              <h2 className="heading">Join our Church Services</h2>
              <div className="subheading">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Viverra ipsum nunc aliquet bibendum enim.
                </p>
                <Link href="/ministries-and-services">
                  <Button variant="primary">Ministries and Services</Button>
                </Link>
              </div>
            </Col>

            {/* images */}
            <Col className="section-main">
              <img src="/praise-and-worship-1.jpg" alt="praise and worship" />
              <img src="/praise-and-worship-2.jpg" alt="praise and worship" />
              <img src="/praise-and-worship-3.jpg" alt="praise and worship" />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Upcoming events section */}
      <section className="border-bottom" id="upcoming-events-section">
        <Container className="text-center">
          {/* heading */}
          <Row className="section-heading">
            <Col lg={8}>
              <h2 className="heading">Upcoming Events and Services</h2>
              <div className="subheading">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </Col>
          </Row>

          {/* main content */}
          <Row className="section-main">
            <Col>
              <img src="/SWR- Jan 30_001.webp" alt="upcoming events" />
            </Col>
          </Row>

          {/* link to events page */}
          <Row className="section-footer">
            <Col>
              <Link href="/events">
                <Button variant="primary">See all our upcoming events</Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Church pastors section */}
      <section id="church-pastors">
        <Container>
          {/* heading */}
          <Row className="section-heading text-center">
            <Col lg={7}>
              <h2 className="heading">The Pastors of Our Church</h2>
              <p className="subheading">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </Col>
          </Row>

          {/* Create a list of cards for the pastors */}
          <Row className="section-main text-center">
            {pastors?.data.map((pastor, index) => {
              return (
                <Col key={index} className="card-container">
                  <Card>
                    <Card.Img variant="top" src={pastor.img} />
                    <Card.Body>
                      <Card.Title>{pastor.name}</Card.Title>
                      <Card.Text>{pastor.role}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
    </div>
  );
}
