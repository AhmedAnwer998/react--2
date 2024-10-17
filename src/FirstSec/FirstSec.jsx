import React, { useState, useEffect } from "react";
import "./FirstSec.css";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import SecondSec from "../SecondSec/SecondSec";
import ThirdSec from "../ThirdSec/ThirdSec";
import FourthSec from "../FourthSec/FourthSec";
import FifthSec from "../FIfthSec/FifthSec";
import Email from "../Email/Email";
import Footer from "../Footer/Footer";

const FirstSec = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <Container className="First-Sec">
        <Row className="First-Sec-Row">
          <Col
            xl={7}
            lg={7}
            md={12}
            sm={12}
            className={`First-Col-1 ${isVisible ? "fade-in-left" : ""}`}
          >
            <p>
              WEB DESIGN <span>//</span> WEBFLOW DEVELOPMENT <span>//</span> SEO
            </p>
            <h1>My Protofolio</h1>
            <p>We build marketing websites that help you sell on autopilot.</p>
            <button>let's talk</button>
          </Col>

          <Col
            xl={5}
            lg={5}
            md={12}
            sm={12}
            className={`First-Col-2 ${isVisible ? "fade-in-right" : ""}`}
          >
            <img src="Images\img9.svg" alt="img9" className="img9" />
            <img src="Images\img2.png" alt="img2" className="img2" />
            <img src="Images\img11.svg" alt="img11" className="img11" />
            <img src="Images\img7.svg" alt="img7" className="img7" />
            <img src="Images\img10.svg" alt="img10" className="img10" />
          </Col>
        </Row>
      </Container>

      <SecondSec />
      <ThirdSec />
      <FourthSec />
      <FifthSec />
      <Email />
      <Footer />
    </>
  );
};

export default FirstSec;
