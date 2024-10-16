import React, { useState, useEffect } from "react";
import "./SecondSec.css";
import { Container, Row, Col } from "react-bootstrap";

const SecondSec = () => {
  const [isVisible, setIsVisible] = useState({ col1: false, col2: false });

  useEffect(() => {
    const handleScroll = () => {
      const col1 = document.querySelector(".Second-Sec-Col-1");
      const col2 = document.querySelector(".Second-Sec-Col-2");
      const rect1 = col1.getBoundingClientRect();
      const rect2 = col2.getBoundingClientRect();

      if (rect1.top < window.innerHeight && !isVisible.col1) {
        setIsVisible((prev) => ({ ...prev, col1: true }));
      }
      if (rect2.top < window.innerHeight && !isVisible.col2) {
        setIsVisible((prev) => ({ ...prev, col2: true }));
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isVisible]);

  return (
    <Container className="Second-Sec">
      <Row className="Second-Sec-row">
        <Col
          xl={6}
          lg={6}
          md={12}
          sm={12}
          className={`Second-Sec-Col-1 ${
            isVisible.col1 ? "fade-in-leftt" : ""
          }`}
        >
          <img src="Images/img6.svg" alt="img6" />
          <img src="Images/img3.svg" alt="img3" />
        </Col>

        <Col
          xl={6}
          lg={6}
          md={12}
          sm={12}
          className={`Second-Sec-Col-2 ${
            isVisible.col2 ? "fade-in-rightt" : ""
          }`}
        >
          <p>the dream</p>
          <p>
            Imagine having your sales team on the job 24/7, interacting with an
            endless stream of ready-to-buy visitors.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default SecondSec;
