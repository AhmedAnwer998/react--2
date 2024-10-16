import React, { useState, useEffect } from "react";
import "./FourthSec.css";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const FourthSec = () => {
  const [isVisible, setIsVisible] = useState(Array(4).fill(false));

  useEffect(() => {
    const handleScroll = () => {
      const divs = document.querySelectorAll(".Fourth-sec-div");
      divs.forEach((div, index) => {
        const rect = div.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100 && !isVisible[index]) {
          setIsVisible((prev) => {
            const newVisibility = [...prev];
            newVisibility[index] = true;
            return newVisibility;
          });
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isVisible]);

  return (
    <Container className="Fourth-sec" id="process">
      <Row className="Fourth-sec-row">
        <Col className="Fourth-sec-col-1">
          <div className="Fourth-sec-bg">
            <img src="Images/img6.svg" alt="" />
          </div>
          <h1>How it's done.</h1>
          <div className="Fourth-sec-divs">
            {[
              {
                img: "Images/img10.svg",
                title: "UX/UI Design",
                text: "Where concepts turn into a strategic user-experience.",
              },
              {
                img: "Images/img11.svg",
                title: "Webflow Development",
                text: "Where design turns into code.",
              },
              {
                img: "Images/img12.svg",
                title: "System Automation",
                text: "Where busywork gets delegated.",
              },
              {
                img: "Images/img7.svg",
                title: "SEO",
                text: "Where customers come flooding in.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`Fourth-sec-div ${
                  index % 2 === 0 ? "left-div" : "right-div"
                } ${
                  isVisible[index]
                    ? index % 2 === 0
                      ? "fade-in-left"
                      : "fade-in-right"
                    : "hidden"
                }`}
              >
                <img src={item.img} alt="" />
                <div className="Fourth-sec-txt">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default FourthSec;
