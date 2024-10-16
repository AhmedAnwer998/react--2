import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./ThirdSec.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const ThirdSec = () => {
  const [projects, setProject] = useState([]);

  useEffect(() => {
    axios.get("data.json").then((res) => {
      setProject(res.data.projects);
    });
  }, []);

  return (
    <Container className="Third-Sec" id="latest-builds">
      <Row className="Third-Sec-row">
        <Col className="Third-Sec-col-txt" md={12}>
          <h3>Latest builds.</h3>
          <Link to="/projects" className="view-projects-link">
            View Projects
          </Link>
        </Col>

        <Col md={12} sm={12} className="Third-Sec-Col">
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              768: {
                width: 768,
                slidesPerView: 2,
              },
              576: {
                width: 576,
                slidesPerView: 2,
              },
              480: {
                slidesPerView: 1, 
              },
              // When the viewport width is >= 320px and < 480px
              320: {
                slidesPerView: 1,
              },
              200: {
                slidesPerView: 1, 
              },
            }}
            initialSlide={0}
            modules={[FreeMode, Pagination]}
            className="mySwiper"
          >
            {projects.slice(1, 6).map((project) => (
              <SwiperSlide key={project.id}>
                <a href={project.link} target="_blank">
                  <img src={project.photo} alt="" />
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </Col>
      </Row>
    </Container>
  );
};

export default ThirdSec;
