import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, projectLink, languages }) => {
  return (
    <Col size={80} sm={24} md={16}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="Project Screenshot" style={{width: "100%", height: "auto"}} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <a href={projectLink} target="_blank" rel="noopener noreferrer">View Project</a>
          <span>{description}</span>
        </div>
      </div>
      <div className="skills">
        <h5>Languages and Skills Used</h5>
        <p>{languages.join(', ')}</p>
      </div>
    </Col>
  )
}

