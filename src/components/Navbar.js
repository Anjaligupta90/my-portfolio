import React from 'react';
import logoimage from '../assets/logoimage.png'

const Navbar = () => {
  return (
    <div className="navbar flex justify-between items-center p-4 font-bold bg-gray-800">
      <div className="logo_container flex items-center">
        <img src={logoimage} alt="Logo" className="logo w-[50px] rounded-full h-[50px]" />
        <div className="logo_text text-2xl text-yellow-600 font-serif">Anjali Gupta</div>
      </div>
      <div className="nav_items flex gap-8 text-white">
        <div><a href="#projects" className="text-lg hover:text-red-500">Projects</a></div>
        <div><a href="#skills" className="text-lg hover:text-red-500">Skills</a></div>
        <div><a href="#contact" className="text-lg hover:text-red-500">Contact Me</a></div>
      </div>
    </div>
  );
};

export default Navbar;
