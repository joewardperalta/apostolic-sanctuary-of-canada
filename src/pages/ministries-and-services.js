import { Container, Row, Col } from "react-bootstrap";
import styles from "@/styles/pages/ministries-and-services.module.scss";

export default function MinistriesAndServices() {
  return (
    <section className={styles.services} id="services">
      <Container>
        {/* services section header */}
        <Row className="header text-center justify-content-center">
          <Col lg={7}>
            <h1 className="title">Ministries and Services</h1>
            <p className="subtitle">
              Join us on our weekly services and be a part of our ministry.
            </p>
          </Col>
        </Row>

        {/* section for sunday service */}
        <Row className={styles.main + " " + styles.sunday} id="sunday-service">
          <Col className="description" lg={6}>
            <h2 className="heading">Sunday Service</h2>
            <p>
              See you every Sunday starting at 10:30am for prayer and devotion,
              11am for praise and worship, 12:30pm for the preaching and will
              end at 2pm. You are more than welcome to stay after the service
              for fellowship.
            </p>
          </Col>
          <Col className={styles.images}>
            <div className={styles.backgroundBox}></div>
            <div className={styles.photos}>
              <div className={"photo " + styles.photo}>
                <div className="frame">
                  <img
                    src="419885993_681986480775594_9056033824979247708_n.jpg"
                    alt="sunday service"
                  />
                </div>
              </div>
              <div className={"photo " + styles.photo}>
                <div className="frame">
                  <img
                    src="420135669_684944447146464_4976343403298649820_n.jpg"
                    alt="sunday service"
                  />
                </div>
              </div>
            </div>
          </Col>
        </Row>

        {/* section for friday service */}
        <Row className={styles.main + " " + styles.friday} id="friday-service">
          <Col className="description" lg={6}>
            <h2 className="heading">Friday Service</h2>
            <p>
              See you every Friday starting at 8:00pm for praise and worship,
              8:40pm for victory report, 9:00pm for the exhortation, and prayer
              and devotion at 9:30pm until 10:00pm. We hope to see you soon!
            </p>
          </Col>
          <Col className={styles.images}>
            <div className={styles.backgroundBox}></div>
            <div className={styles.photos}>
              <div className={"photo " + styles.photo}>
                <div className="frame">
                  <img
                    src="341694663_1537194117054783_5419895242153169832_n.jpg"
                    alt="friday service"
                  />
                </div>
              </div>
              <div className={"photo " + styles.photo}>
                <div className="frame">
                  <img
                    src="341359580_750348520046794_2293879956820106252_n.jpg"
                    alt="friday service"
                  />
                </div>
              </div>
            </div>
          </Col>
        </Row>

        {/* section for christian education program */}
        <Row
          className={styles.main + " " + styles.christianEducationProgram}
          id="christian-education-program"
        >
          <Col className="description" lg={6}>
            <h2 className="heading">Christian Education Program</h2>
            <p>
              Christian Education Program is seasonal and usually starts every
              Sunday at 10:00am and ends at 11:00am. This March 2024 the
              Christian Education Program will begin and so the time for prayer
              and devotion will be adjusted at 9:30am.
            </p>
            <p>
              If you want to learn more about the bible and theology please come
              on Sunday.
            </p>
          </Col>
          <Col className={styles.images}>
            <div className={styles.backgroundBox}></div>
            <div className={styles.photos}>
              <div className={"photo " + styles.photo}>
                <div className="frame">
                  <img src="IMG_0274.png" alt="bible" />
                </div>
              </div>
              <div className={"photo " + styles.photo}>
                <div className="frame">
                  <img src="IMG_0275.png" alt="bible" />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
