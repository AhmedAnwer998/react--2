import React, {Container, Row, Col} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css"
import "./Email.css";
import { useEffect, useState } from 'react';


const Email = () => {

    const [isVisible, setIsVisible] = useState({col1: false, col2: false});

    useEffect(()=>{

     const handleScroll = ()=>{
           const col1 = document.querySelector(".email-col-1");
           const col2 = document.querySelector(".email-col-2");
           const rect1 = col1.getBoundingClientRect();
           const rect2 = col2.getBoundingClientRect();

           if(rect1.top < window.innerHeight && !isVisible.col1){
            setIsVisible((prev)=>({ ...prev, col1: true}));
           }

           if(rect2.top < window.innerHeight && !isVisible.col2){
            setIsVisible((prev)=>({...prev, col2: true}));
           }
     };
     window.addEventListener("scroll", handleScroll);
     return () => window.removeEventListener("scroll", handleScroll);


    }, [isVisible]);

  return (
    <Container className="email" id="contact-us">
      <h1>Contact Us</h1>
      <Row className="email-row">
        <Col
          className={`email-col-1 ${isVisible.col1 ? "fade-in-left" : ""}`}
          xl={6}
          lg={6}
          md={12}
          sm={12}
        >
          <p>
            <span>Email: </span> info@gmail.com
          </p>
          <p>
            <span>Phone: </span> 0121133133131
          </p>
          <p>
            <span>Address: </span> 23 street newYork
          </p>
        </Col>

        <Col className={`email-col-2 ${isVisible.col2 ? "fade-in-right" : ""}`} xl={6} lg={6} md={12} sm={12}>
          <form>
            <div className="d-flex">
              <input type="text" name="name" placeholder="Name" />
              <input type="text" name="company" placeholder="Company" />
            </div>
            <div className="d-flex">
              <input type="text" name="email" placeholder="Email" />
              <input type="text" name="phone" placeholder="Phone" />
            </div>
            <textarea name="message" placeholder="Message"></textarea>
            <button type="submit">Send Message</button>
          </form>
        </Col>
      </Row>
    </Container>
  );
}

export default Email