import React from 'react';
import html from "../assets/stack-image/HTML.png";
import Express from "../assets/stack-image/Express.png";
import css from "../assets/stack-image/CSS.png";
import mongodb from "../assets/stack-image/MongoDB.svg";
import nextjs from "../assets/stack-image/Next.svg";
import js from "../assets/stack-image/js.png";
import react from "../assets/stack-image/React.png";
import nodejs from "../assets/stack-image/nodejs.jpg";
import tailwind from "../assets/stack-image/Tailwind.png";

const SkillsSection = () => {
  return (
    <div id="skills" className="skills_container flex flex-col md:flex-row my-16">
      <div className="skills_container_left w-full md:w-1/2 p-8">
        <h2 className="skills_heading text-5xl text-red-600">Me and My Tech Stack</h2>
        <div className="skills_subheading mt-4 font-medium">
          <p>Hi Everyone! My name is John Doe. I am a Full Stack Web Developer with over 3 years of experience. Currently, I am working with a budding startup in the USA and as a full-time freelancer. I specialize in Next.js and creating beautiful UI/UX.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non doloremque aspernatur, maiores voluptatum minus laudantium? Perspiciatis accusamus minima porro dolores necessitatibus, magni dolorem et qui veniam nulla sequi molestiae maxime.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis quidem quos ullam veritatis voluptates tenetur qui ipsa nulla culpa itaque?</p>
        </div>
      </div>
      <div className="skills_container_right w-full md:w-1/2 flex flex-wrap justify-evenly gap-4 p-8">
        <div className="grid grid-cols-3 gap-4 w-full animate-pulse">
          <img src={html} alt="HTML" className="skills_logo w-16 h-16 object-contain" />
          <img src={css} alt="CSS" className="skills_logo w-16 h-16 object-contain" />
          <img src={js} alt="JavaScript" className="skills_logo w-16 h-16 object-contain" />
          <img src={react} alt="React" className="skills_logo w-16 h-16 object-contain" />
          <img src={nodejs} alt="Node.js" className="skills_logo w-16 h-16 object-contain" />
          <img src={nextjs} alt="Next.js" className="skills_logo w-16 h-16 object-contain" />
          <img src={tailwind} alt="Tailwind CSS" className="skills_logo w-16 h-16 object-contain" />
          <img src={Express} alt="Express" className="skills_logo w-16 h-16 object-contain" />
          <img src={mongodb} alt="MongoDB" className="skills_logo w-16 h-16 object-contain" />
          {/* Add more skills as needed */}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;