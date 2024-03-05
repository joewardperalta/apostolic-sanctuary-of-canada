import { Button, Col, Row, Container, Card } from "react-bootstrap";
import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "@/styles/pages/home.module.scss";

export default function Home() {
  const [groups, setGroups] = useState();
  const [pastors, setPastors] = useState();
  const groups_api = process.env.NEXT_PUBLIC_DOMAIN + "api/groups";
  const pastors_api = process.env.NEXT_PUBLIC_DOMAIN + "api/pastors";

  useEffect(() => {
    fetch(groups_api)
      .then((res) => res.json())
      .then((data) => setGroups(data));

    fetch(pastors_api)
      .then((res) => res.json())
      .then((data) => setPastors(data));
  }, []);

  return (
    <>
      {/* Hero section */}
      <section className={styles.hero} id="hero">
        <Container className={styles.container}>
          <Row className={styles.header}>
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
              <Link href="/location">
                <Button variant="primary">Visit our church</Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>

      {/* About section */}
      <section className={styles.about + " border-bottom"} id="about">
        <Container>
          <Row className={styles.main}>
            <Col className="mb-3 mb-sm-5 mb-lg-0 me-lg-5" lg={6}>
              <img src="/church-family.jpg" alt="apostolic church family" />
            </Col>

            <Col>
              <h2 className={styles.heading + " heading"}>Who We Are</h2>
              <div className={styles.description}>
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
                  <Link href="/ministries-and-services">here</Link>.
                </p>
                <p>
                  Follow us on our Facebook page to know more about us, be
                  updated on upcoming events and live services. We hope to see
                  you soon.
                </p>
                <div className="mb-5">
                  <Link
                    className={`${styles.socialLink} icon facebook-icon`}
                    href="https://www.facebook.com/apostolicsanctuarycanada"
                    target="_blank"
                  >
                    <i className="fa-brands fa-facebook"></i>
                    Facebook
                  </Link>
                  <Link
                    className={`${styles.socialLink} icon youtube-icon`}
                    href="https://www.youtube.com/@theapostolicsanctuaryofcan4004"
                    target="_blank"
                  >
                    <i className="fa-brands fa-youtube"></i>
                    Youtube
                  </Link>
                </div>
              </div>
              <Button variant="secondary">
                <Link href="/about">
                  Learn more about us
                  <i className="icon fa-solid fa-arrow-right"></i>
                </Link>
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Community section */}
      <section className={styles.community} id="community">
        <Container>
          <Row className={styles.header + " mb-5"}>
            <Col className="me-sm-5" lg={6}>
              <h2 className="heading">
                Get connected with our church community
              </h2>
            </Col>
            <Col>
              <p className={styles.subheading + " subheading"}>
                We believe that spiritual connections with God and with each
                other are important for our spiritual growth. We are a community
                dedicated to grow in spiritual truth refined on the teaching of
                Jesus Christ, our Lord, and Savior.
              </p>
            </Col>
          </Row>

          {/* creates a list of church departments */}
          <Row className={styles.main}>
            {groups?.data.map((group, index) => {
              return (
                <Col key={index} className={styles.cardContainer} lg={6}>
                  <Card className={styles.card}>
                    <Card.Body className={styles.cardBody}>
                      <Card.Title className={styles.cardTitle}>
                        {group.name}
                      </Card.Title>
                      <Card.Text className={styles.cardText}>
                        {group.description}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>

      {/* Services section */}
      <section className={styles.services} id="services">
        <Container>
          <Row className={styles.main}>
            <Col className="me-0 me-sm-5 mb-5 mb-sm-0" lg={6}>
              <h2 className="heading">Join our Church Services</h2>
              <div className="subheading">
                <p>
                  We meet every Sunday at The Apostolic Sanctuary of Canada. The
                  service starts at 11am and ends at 2pm.
                </p>
              </div>
              <Link href="/ministries-and-services">
                <Button variant="primary">Ministries and Services</Button>
              </Link>
            </Col>

            <Col className={styles.images}>
              <img src="/praise-and-worship-1.jpg" alt="praise and worship" />
              <img src="/praise-and-worship-2.jpg" alt="praise and worship" />
              <img src="/praise-and-worship-3.jpg" alt="praise and worship" />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Upcoming events section */}
      <section
        className={styles.upcomingEvents + " border-bottom"}
        id="upcoming-events"
      >
        <Container className="text-center">
          <Row className={styles.header + " mb-5"}>
            <Col lg={8}>
              <h2 className="heading">Upcoming Events and Services</h2>
              <p className="subheading mb-0">
                Please check the announcements, reminders, and upcoming services
                and events so that you are aware of what's coming.
              </p>
            </Col>
          </Row>

          <Row className={styles.main + " mb-5"}>
            <Col lg={8}>
              <img src="/announcements.jpg" alt="upcoming events" />
            </Col>
          </Row>

          <Row>
            <Link href="/events" className="px-0">
              <Button variant="primary">See all our upcoming events</Button>
            </Link>
          </Row>
        </Container>
      </section>

      {/* Church pastors section */}
      <section className={styles.churchPastors} id="church-pastors">
        <Container>
          <Row className={styles.header + " text-center mb-5"}>
            <Col lg={7}>
              <h2 className="heading">The Pastors of Our Church</h2>
              <p className="subheading mb-0">
                We dedicate our full support and loyalty to our pastors because
                without them we wouldn't be able to know about Jesus Christ.
              </p>
            </Col>
          </Row>

          {/* Create a list of cards for the pastors */}
          <Row className={styles.main + " text-center"}>
            {pastors?.data.map((pastor, index) => {
              return (
                <Col key={index} className={styles.cardContainer} lg={4}>
                  <Card className={styles.card}>
                    <Card.Img
                      className={styles.cardImage}
                      variant="top"
                      src={pastor.img.src}
                      alt={pastor.img.alt}
                    />
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
    </>
  );
}
