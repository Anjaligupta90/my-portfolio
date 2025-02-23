import React from 'react';
import image1 from '../assets/p1.png';
import image2 from '../assets/p2.png';
import image3 from '../assets/p3.png';
import image4 from '../assets/p5.png';

const ProjectSection = () => {
  const projects = [
    {
      id: 1,
      title: "Online Login and Sign-Up Form",
      description: "Overview: The Online Login and Sign-Up Form is a user-friendly interface designed to facilitate secure user authentication for web applications. This form allows users to create a new account or log into an existing one, ensuring a seamless experience while maintaining high standards of security and usability.",
      image: image1,
      githubLink: "#",
      liveLink: "#"
    },
    {
      id: 2,
      title: "Course Hub",
      description: "Overview: CourseHub is an innovative online learning platform designed to empower learners by providing a diverse range of courses across various categories. Whether you're looking to enhance your professional skills, explore new hobbies, or dive deep into academic subjects, CourseHub offers a comprehensive selection of courses tailored to meet your needs.",
      image: image2,
      githubLink: "#",
      liveLink: "#"
    },
    {
      id: 3,
      title:"Simplifying Your Interests",
      description: "Overview: The Card Manager is an intuitive web application designed to help users manage their interests effectively With a clean and user-friendly interface, this application allows users to browse through various cards representing different items, topics, or activities. Each card comes with a Not Interested button, enabling users to easily remove items they no longer wish to see, streamlining their experience and keeping their focus on what truly matters.",
      image: image3,
      githubLink: "#",
      liveLink: "#"
    },
    {
      id: 4,
      title: "Weather Explorer",
      description: "Overview: Weather Explorer is an intuitive web application designed to provide users with real-time weather information for any location around the globe. With a simple and user-friendly interface, this application allows users to search for weather conditions in their desired cities, making it easy to plan their day or week ahead.",
      image: image4,
      githubLink: "#",
      liveLink: "#"
    }
  ];

  return (
    <div className="project_sect my-16 bg-gray-200" id="projects">
      <h2 className="page_header text-6xl text-red-600 text-center py-8 mb-2 font-bold">Projects</h2>
      <div className="project_container max-w-5xl mx-auto flex flex-col gap-8">
        {projects.map((project, index) => (
          <div className="project_card relative bg-gray-800 rounded-lg overflow-hidden shadow-lg" key={project.id}>
            <div className="md:w-1/2 h-64 md:h-96 bg-cover bg-center bg-no-repeat w-full" style={{ backgroundImage: `url(${project.image})`, backgroundSize: "cover" }}></div>
            <div className={`project_no absolute text-8xl text-white z-10 ${index % 2 === 0 ? 'right-0' : 'left-0'} top-4`}>{String(project.id).padStart(2, '0')}</div>
            <div className="project_content absolute text-white p-8 bottom-0 z-20">
              <h2 className="project_heading text-2xl font-bold">{project.title}</h2>
              <div className="project_subheading text-sm">{project.description}</div>
              <div className="btn_group flex gap-2 mt-4">
                <button className="btn bg-red-500 text-white py-2 px-4 rounded hover:bg-blue-400">HERE ME</button>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-github icon text-xl"></i>
                </a>
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                  <i className="fa-solid fa-link icon text-xl"></i>
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
