import { Container, Row, Col, Button } from "react-bootstrap";
import Link from "next/link";
import styles from "@/styles/pages/about.module.scss";

export default function About() {
  return (
    <>
      <section className={styles.about} id="about">
        <Container>
          {/* about page header */}
          <Row className="header text-center justify-content-center">
            <Col lg={7}>
              <h1 className="title">About Us</h1>
              <p className="subtitle">
                It contains everything you need to know about our mission,
                commitment, rights and privileges, and articles of faith.
              </p>
            </Col>
          </Row>

          {/* our mission */}
          <Row className={styles.main + " " + styles.mission} id="mission">
            <Col>
              <h2 className="heading">Our Mission</h2>
              <p>
                To Carry out the Commission of our Lord Jesus Christ; to preach,
                teach and make disciples; to serve and help our communities
                through various ministries and programs; to be the modern day
                disciples and apostles of our Lord Jesus Christ to carry the
                Gospel to all nations and people.
              </p>
            </Col>
            <Col className={styles.photos} sm={0} lg={6}>
              <div className={"photo " + styles.photo}>
                <div className="frame">
                  <img
                    src="/IMG_0157.png"
                    alt="The Apostolic Sanctuary of Canada Congregation"
                  />
                </div>
              </div>

              <div className={"photo " + styles.photo}>
                <div className="frame">
                  <img
                    src="/IMG_3756.png"
                    alt="The Apostolic Sanctuary of Canada Congregation"
                  />
                </div>
              </div>
            </Col>
          </Row>

          {/* our commitment */}
          <Row
            className={styles.main + " " + styles.commitment}
            id="commitment"
          >
            <Col>
              <h2 className="heading">Our Commitment</h2>
              <p>
                Our Commitment is to preserve the holiness of the Church, to
                preserve the principles and truths of the Bible; to adopt those
                principles and truths into our daily lives.
              </p>
              <p>
                We commit to be a hospitable body of Jesus Christ. We do not
                tolerate racism, sexism, any form of bullying, hatred, abuse of
                authority, pride and the sins that beset the Church, of which
                God hates. We endeavour to maintain the unity, forgiving one
                another and to love and serve one another in the goal of being
                faithful, unified body of Christ. We commit to these virtues to
                be able to reach and minister in our communities. We accept all
                people regardless of background, ethnicity, or sexual
                orientation for the sake of the Gospel to reach them and
                minister with the love of God.
              </p>
            </Col>
            <Col className={styles.photos} sm={0} lg={6}>
              <div className={"photo " + styles.photo}>
                <div className="frame">
                  <img
                    src="/IMG_0161.png"
                    alt="The Apostolic Sanctuary of Canada Congregation"
                  />
                </div>
              </div>

              <div className={"photo " + styles.photo}>
                <div className="frame">
                  <img
                    src="/IMG_3760.png"
                    alt="The Apostolic Sanctuary of Canada Congregation"
                  />
                </div>
              </div>
            </Col>
          </Row>

          {/* our rights and privileges */}
          <Row className={styles.main} id="rights-and-privileges">
            <Col lg={6}>
              <h2 className="heading">Our Rights and Privileges</h2>
              <p>
                We hold the right and privilege to be Apostolic in worship, in
                lifestyle and in all conduct. We have the right to worship God
                and express our beliefs in our House of Worship, the Apostolic
                Sanctuary of Canada Inc. These rights are written and in
                according to the Canada Charter of Rights and Freedoms - Section
                2(a), as well as the Bylaws set forth by our Church. We at all
                costs, hold to these rights and privileges.
              </p>
            </Col>
          </Row>

          {/* our articles of faith */}
          <Row className={styles.main} id="articles-of-faith ">
            <Col lg={6}>
              <h2 className="heading">Our Articles of Faith</h2>
              <p>Tap or click the Link below to read our Articles of Faith.</p>

              {/* link to pdf version of articles of faith */}
              <Link href="TASC Articles of Faith 2023.pdf" target="_blank">
                <Button variant="primary">Read our Articles of Faith</Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
