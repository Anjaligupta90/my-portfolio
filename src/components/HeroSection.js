import React from 'react';
import Typed from 'typed.js';
import user from "../assets/user.jpg";
import plus from '../assets/plus.png';
import cube from '../assets/cube.png';
import zig from '../assets/zigzags.png';
import circle from '../assets/circle.png';

const HeroSection = () => {
  React.useEffect(() => {
    const options = {
      strings: ["Full Stack Developer", "Web Developer", "UI-UX Designer", "Backend Developer", "Coder"],
      loop: true,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 1000,
    };
    const typed = new Typed('.role', options);
    return () => {
      typed.destroy();
    };
  }, []);

  const handleButtonClick = () => {
    // Replace with your LinkedIn profile URL
    window.location.href = 'https://www.linkedin.com/in/anjali-kumari-29272324a/'; 
  };

  return (
    <div className="hero_section flex justify-evenly items-center my-16 gap-20 relative text-white  pt-20 md:pt-32 lg:pt-32 xl:pt-32">

      {/* <div className="centername absolute top-[280px] feded_text text-7xl text-gray-300">ANJALI GUPTA</div> */}

      <div className="hero_left flex flex-col justify-center gap-8">
        <div className="hero_heading text-4xl text-green-800 font-semibold">Hi!! ANJALI</div>
        <div className=" hero_subheading text-2xl">I am a <span className="role font-extrabold text-yellow-600"></span></div>
        <div className="hero_description text-lg w-[400px] font-medium">
          I am a Software Developer and here is my portfolio website. Here you will learn about my journey as a software developer.
        </div>
        <div 
          className="herobtn bg-red-500 text-white py-2 px-4 rounded text-sm w-[100px] cursor-pointer" 
          onClick={handleButtonClick}
        >
          HERE ME
        </div>
      </div>

      <div className="hero_right w-[250px] h-[250px] relative animate-bounce">
        <div>
          <img src={user} alt="User " className="userimage border-[8px] w-full h-full border-black"/>  
        </div>
        <img src={circle} alt='circle' className='absolute bottom-[-10px] animate-bounce' id="icon" />
        <img src={cube} alt='cube' className='absolute bottom-[240px] left-[230px] animate-bounce' />
        <img src={zig} alt='zigzag' className='absolute bottom-[190px] left-[-10px] animate-bounce' />
        <img src={plus} alt='plus' className='absolute bottom-[-10px] left-[220px] animate-bounce' />
      </div>

    </div>
  );
};

export default HeroSection;