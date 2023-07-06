import React, { useState } from 'react';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../img/color-sharp2.png"
import iTTT from "../img/ittt.png"
import EE from "../img/ee.png"
import GS from "../img/goalset.png"

export const Projects = () => {

  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Impossible TTT",
      description: " Unwinnable TikTacToe",
      imgUrl: iTTT,
      projectLink: "https://comfy-scone-e4cd32.netlify.app/",
      languages: ['JavaScript', 'React', 'CSS']
    },
    {
      title: "Ed's Exercises",
      description: " Uses MongoDB to Log your exercises",
      imgUrl: EE,
      projectLink: 'https://fine-pear-armadillo.cyclic.app/',
      languages: ['EJS', 'CSS', 'JavaScript', 'Node', 'Express', 'MongoDB']
    },
    {
      title: "GoalSet",
      description: " Uses local storage to record your goals and remember them you can toggle when you complete (pure js).",
      imgUrl: GS,
      projectLink: 'https://goalset.netlify.app/',
      languages: ['HTML', 'CSS', 'JS']
    },
  ];

  const selectProject = (index) => {
    setSelectedProject(projects[index]);
  };

  return (
    <section className="projects" id="projects">
      <Container>
        <Row>
          <Col>
            <h2 className="wf">Projects</h2>
            <p>These are my projects with their specific skills they involved and an external link to their respective websites.</p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                {projects.map((project, index) => (
                  <Nav.Item key={index}>
                    <Nav.Link eventKey={index} onClick={() => selectProject(index)}>
                      {project.title}
                    </Nav.Link>
                  </Nav.Item>
                ))}
              </Nav>
              <Tab.Content id="slideInUp">
                {selectedProject && 
                  <ProjectCard
                    {...selectedProject}
                  />
                }
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background"></img>
    </section>
  )
}
