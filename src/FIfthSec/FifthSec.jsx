import React, { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./FifthSec.css";
import { useEffect, useState } from "react";

const FifthSec = () => {
  const [isVisible, setIsVisible] = useState(Array(3).fill(false));

  useEffect(() => {
    const handleScroll = () => {
      const divs = document.querySelectorAll(".fifth-sec-div");
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
    <Container className="Fifth-sec" id="services">
      <Row className="Fifth-sec-row">
        <Col className="Fifth-sec-col">
          <h1>Why Webflow</h1>
          <div className="fifth-sec-divs">
            {[
              {
                img: "Images/img8.svg",
                title: "REASON 1",
                head: "Next-Level Storytelling",
                description:
                  "Unleash the best visuals and experiences that modern web design has to offer. Webflow turns your wildest of ideas into strategic customer-experiences.",
              },
              {
                img: "Images/img4.svg",
                title: "REASON 2",
                head: "Unbelievable Performance",
                description:
                  "Hosted on an ultra-fast global CDN, Webflow goes full steam ahead with load speed, uptime, asset optimization, and SEO. All without ever needing to install a patch or upload a server configuration.",
              },
              {
                img: "Images/img5.svg",
                title: "REASON 3",
                head: "Developer-Free Tweaks",
                description:
                  "Webflow’s ‘Editor Mode’ allows any team member to update content as they please without wreaking havoc or paying people like us to fix it.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`fifth-sec-div ${isVisible[index] ? "fade-up" : ""}`}
              >
                <h5> {item.title} </h5>
                <h1> {item.head} </h1>
                <img src={item.img} alt="" />
                <p> {item.description} </p>
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default FifthSec;
