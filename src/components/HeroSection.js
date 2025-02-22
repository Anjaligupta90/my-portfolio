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

  return (
    <div className="hero_section flex justify-evenly items-center my-16 gap-20 relative">

      <div className="absolute top-[280px] feded_text text-7xl text-gray-300">ANJALI GUPTA</div>

      <div className="hero_left flex flex-col justify-center gap-8">
        <div className="hero_heading text-4xl text-gray-800 font-semibold">Hi!! ANJALI</div>
        <div className="hero_heading hero_subheading text-2xl">I am a <span className="role font-extrabold"></span></div>
        <div className="hero_description text-lg w-[400px] font-medium">
          I am a Software Developer and here is my portfolio website. Here you will learn about my journey as a software developer.
        </div>
        <div className="btn bg-red-500 text-white py-2 px-4 rounded text-sm w-[100px]">HERE ME</div>
      </div>

      <div className="hero_right w-[250px] h-[250px] relative animate-bounce">
        <div>
        <img src={user} alt="User" className="userimage  border-[8px]  w-full h-full border-black"/>  
        </div>
        <img src={circle} alt='circle' className='absolute bottom-[-10px] animate-bounce' ></img>
        <img src={cube} alt='circle' className='absolute  bottom-[240px] left-[230px] animate-bounce'></img>
        <img src={zig} alt='circle' className=' absolute bottom-[190px] left-[-10px] animate-bounce '></img>
        <img src={plus} alt='circle' className='absolute bottom-[-10px] left-[220px] animate-bounce'></img>
      </div>

    </div>
  );
};

export default HeroSection;