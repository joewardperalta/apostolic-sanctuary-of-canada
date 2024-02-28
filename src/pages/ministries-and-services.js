import { Container, Row, Col } from "react-bootstrap";

export default function MinistriesAndServices() {
  return (
    <section id="ministries-and-services-page">
      <Container>
        {/* heading */}
        <Row className="section-heading text-center">
          <Col lg={7}>
            <h1 className="title">Ministries and Services</h1>
            <p className="subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </Col>
        </Row>

        {/* section for sunday service */}
        <Row className="section-main" id="sunday-service">
          <Col className="description">
            <h2 className="heading">Sunday Service</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Quisque egestas diam in arcu cursus euismod quis viverra nibh.
              Massa tincidunt dui ut ornare.
            </p>
          </Col>
          <Col className="images">
            <div className="background-box"></div>
            <div className="photos">
              <div className="photo">
                <div className="frame">
                  <img
                    src="419885993_681986480775594_9056033824979247708_n.jpg"
                    alt="sunday service"
                  />
                </div>
              </div>
              <div className="photo">
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
        <Row className="section-main" id="friday-service">
          <Col className="description">
            <h2 className="heading">Friday Service</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Scelerisque mauris pellentesque pulvinar pellentesque.
            </p>
          </Col>
          <Col className="images">
            <div className="background-box"></div>
            <div className="photos">
              <div className="photo">
                <div className="frame">
                  <img
                    src="341694663_1537194117054783_5419895242153169832_n.jpg"
                    alt="friday service"
                  />
                </div>
              </div>
              <div className="photo">
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
        <Row className="section-main" id="christian-education-program">
          <Col className="description">
            <h2 className="heading">Christian Education Program</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quam
              elementum pulvinar etiam non.
            </p>
          </Col>
          <Col className="images">
            <div className="background-box"></div>
            <div className="photos">
              <div className="photo">
                <div className="frame">
                  <img src="IMG_0274.png" alt="bible" />
                </div>
              </div>
              <div className="photo">
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
