import React from 'react';
import image1 from '../assets/p1.png';
import image2 from '../assets/p2.png';
import image3 from '../assets/p3.png';
import image4 from '../assets/p5.png';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import './ProjectSection.css'; // Import the CSS file

const ProjectSection = () => {
  const projects = [
    {
      id: 1,
      title: "Online Login and Sign-Up Form",
      description: "Overview: The Online Login and Sign-Up Form is a user-friendly interface designed to facilitate secure user authentication for web applications.",
      image: image1,
      githubLink: "#",
      liveLink: "#"
    },
    {
      id: 2,
      title: "Course Hub",
      description: "Overview: CourseHub is an innovative online learning platform designed to empower learners by providing a diverse range of courses.",
      image: image2,
      githubLink: "#",
      liveLink: "#"
    },
    {
      id: 3,
      title: "Simplifying Your Interests",
      description: "Overview: The Card Manager is an intuitive web application designed to help users manage their interests effectively.",
      image: image3,
      githubLink: "#",
      liveLink: "#"
    },
    {
      id: 4,
      title: "Weather Explorer",
      description: "Overview: Weather Explorer is an intuitive web application designed to provide users with real-time weather information.",
      image: image4,
      githubLink: "#",
      liveLink: "#"
    }
  ];

  return (
    <div className="project_sect" id="projects">
      <div className="page_header">Projects
      <div className="underline"></div>
      </div>
      <div className="project_container">
        {projects.map((project, index) => (
          <div className="project_card" key={project.id}>
            <div className="proimg" style={{ backgroundImage: `url(${project.image})` }}></div>
            <div className={`project_no ${index % 2 === 0 ? 'right-[520px]' : 'left-[520px]'} top-4`}>
              {String(project.id).padStart(2, '0')}
            </div>
            <div className="project_content">
              <h2 className="project_heading">{project.title}</h2>
              <div className="project_subheading">{project.description}</div>
              <div className="btn_group">
                <button className="btn">HERE ME</button>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                  <i className="icon"><FaGithub /></i>
                </a>
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                  <i className="icon"><FaLinkedin /></i>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;