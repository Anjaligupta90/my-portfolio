import React from 'react';

const Navbar = () => {
  return (
    <div className="navbar flex justify-between items-center p-4 font-bold">
      <div className="logo_container flex items-center">
        <img src="assets/NavLogo.jpg" alt="Logo" className="logo w-20" />
        <div className="logo_text text-2xl">Anjali Gupta</div>
      </div>
      <div className="nav_items flex gap-8">
        <div><a href="#projects" className="text-lg">Projects</a></div>
        <div><a href="#skills" className="text-lg">Skills</a></div>
        <div><a href="#contact" className="text-lg">Contact Me</a></div>
      </div>
    </div>
  );
};

export default Navbar;