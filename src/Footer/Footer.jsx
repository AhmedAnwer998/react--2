import React, { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";
import { HashLink } from "react-router-hash-link";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { useEffect, useState } from "react";






const Footer = () => {


    const [isVisible, setIsVisible] = useState({col1: false, col2: false, col3: false});


    useEffect(()=>{
        const handleScroll =()=>{
            const col1 = document.querySelector(".footer-col-1");
            const col2 = document.querySelector(".footer-col-2");
            const col3 = document.querySelector(".footer-col-3");
            const rect1 = col1.getBoundingClientRect();
            const rect2 = col2.getBoundingClientRect(); 
            const rect3 = col3.getBoundingClientRect();

            if(rect1.top < window.innerHeight && !isVisible.col1){
                setIsVisible((prev)=> ({...prev, col1: true}));
            }

            if(rect1.top < window.innerHeight && !isVisible.col2){
                setIsVisible((prev)=> ({...prev, col2: true}));
            }

            if (rect1.top < window.innerHeight && !isVisible.col3) {
              setIsVisible((prev) => ({ ...prev, col3: true }));
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isVisible]);



  return (
    <Container className="footer">
      <Row className="footer-row">
        <Col
          className={`footer-col-1 ${isVisible.col1 ? "fade-in-left" : ""}`}
          xl={4}
          md={12}
        >
          <img src="Images\img1.png" alt="" />
        </Col>
        <Col className={`footer-col-2 ${isVisible.col2 ? "fade-up" : ""}`} xl={4} md={12}>
          <div className="hash-links">
            <HashLink to="/#latest-builds" className="hash">
              Latest Builds
            </HashLink>
            <HashLink to="/#process" className="hash">
              Process
            </HashLink>
            <HashLink to="/#services" className="hash">
              Services
            </HashLink>
            <HashLink to="/#contact-us" className="hash">
              Contact Us
            </HashLink>
            <HashLink to="/projects" className="hash">
              Projects
            </HashLink>
          </div>
          <div className="d-flex">
            <p>&#169; 2022</p>
            <p>Email: info@shilohcreative.com</p>
          </div>
        </Col>
        <Col
          className={`footer-col-3 ${isVisible.col3 ? "fade-in-right" : ""}`}
          xl={4}
          md={12}
        >
          <FaFacebookSquare />
          <FaInstagram />
          <FaLinkedin />
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
