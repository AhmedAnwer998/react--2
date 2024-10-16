import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "./Projects.css";

const Projects = () => {
  const [projects, setProject] = useState([]);

  useEffect(() => {
    axios.get("data.json").then((res) => {
      setProject(res.data.projects);
    });
  }, []);

  return (
    <Container className="projects-container">
      <Row className="projects-container-row">
        {projects.map((project) => (
          <Col
          xl={4}
          lg={4}
            md={4}
            sm={12}
            key={project.id}
            className="projects-container-col"
          >
            <div className="projects-container-card">
              <img src={project.photo} alt="" />
              <h2> {project.title} </h2>
              <p> {project.description} </p>
              <a href={project.link} target="_blank">
                View
              </a>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Projects;
