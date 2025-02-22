import React from 'react';
import image1 from '../assets/p1.png'
import image2 from '../assets/p2.png'
import image3 from '../assets/p3.png'
import image4 from '../assets/p5.png'

const ProjectSection = () => {
  const projects = [
    {
      id: 1,
      title: "Tint & Orange",
      description: "It is a car modification company which provides you sheets to protect your car from scratches.",
      image:image1,
      githubLink: "#",
      liveLink: "#"
    },
    {
      id: 2,
      title: "Banking Copyrights",
      description: "A platform for managing banking copyrights efficiently.",
      image: image2,
      githubLink: "#",
      liveLink: "#"
    },
    {
      id: 3,
      title: "Isha Tattva",
      description: "A wellness platform providing holistic health solutions.",
      image: image3,
      githubLink: "#",
      liveLink: "#"
    },
    {
      id: 4,
      title: "Granit",
      description: "A service for granite installation and maintenance.",
      image: image4,
      githubLink: "#",
      liveLink: "#"
    }
  ];

  return (
    <div className="project_sect my-16 bg-gray-200" id="projects">
      <h2 className="page_header text-6xl text-red-600 text-center py-8">Projects</h2>
      <div className="project_container max-w-5xl mx-auto flex flex-col gap-8"> {/* Adjusted gap here */}
        {projects.map((project, index) => (
          <div
            className={`project_card bg-cover bg-no-repeat bg-center h-96 relative transition-all duration-500 hover:shadow-2xl  ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} mb-8`} // Added mb-8 for margin-bottom
            style={{ backgroundImage: `url(${project.image})` }}
            key={project.id}
          >
            <div className={`project_no absolute text-8xl text-white z-10 ${index % 2 === 0 ? 'right-0' : 'left-0'}`}>
              {String(project.id).padStart(2, '0')}
            </div>
            <div className="project_content absolute text-red-600 p-8 bottom-0 z-20">
              <h2 className="project_heading text-4xl font-bold">{project.title}</h2>
              <div className="project_subheading text-lg italic">{project.description}</div>
              <div className="btn_group flex gap-4 mt-4">
                <button className="btn bg-red-500 text-white py-2 px-4 rounded">HERE ME</button>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-github icon text-2xl"></i>
                </a>
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                  <i className="fa-solid fa-link icon text-2xl"></i>
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