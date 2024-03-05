import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import styles from "@/styles/pages/contact.module.scss";

export default function Contact() {
  return (
    <section id="contact-us">
      <Container className="text-center">
        {/* Contact section header */}
        <Row className="header text-center justify-content-center">
          <Col lg={7}>
            <h1 className="title">Contact Us</h1>
            <p className="subtitle">
              If you have any questions and concerns please contact us.
            </p>
          </Col>
        </Row>

        {/* Contact info */}
        <Row className={styles.main}>
          <Col lg={4}>
            <div className={styles.iconContainer}>
              <i className="fa-solid fa-location-dot"></i>
            </div>
            <h5>Address</h5>
            <p>3-1177 Finch Ave W, North York, ON M3J 2E9</p>
          </Col>
          <Col lg={4}>
            <div className={styles.iconContainer}>
              <i className="fa-solid fa-mobile-screen-button"></i>
            </div>
            <h5>Phone</h5>
            <p>(416) 421-0994</p>
          </Col>
          <Col lg={4}>
            <div className={styles.iconContainer}>
              <i className="fa-solid fa-at"></i>
            </div>
            <h5>Email</h5>
            <Link href="mailto:myapostolicsanctuary@gmail.com">
              myapostolicsanctuary@gmail.com
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
