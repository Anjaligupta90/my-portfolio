import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex justify-between items-center font-bold">
        <div className="footer_feded_text text-3xl">Anjali Gupta</div>
        <div className="link_wrapper flex gap-4">
          <div><a href="#projects" className="hover:text-red-500">Projects</a></div>
          <div><a href="#skills" className="hover:text-red-500">Skills</a></div>
          <div><a href="#contact" className="hover:text-red-500">Contact Me</a></div>
        </div>
        <div className="icon_wrapper flex gap-4">
          <i className="fa-brands fa-linkedin icon text-2xl hover:text-red-500"></i>
          <i className="fa-brands fa-github icon text-2xl hover:text-red-500"></i>
          <i className="fa-brands fa-twitter icon text-2xl hover:text-red-500"></i>
          <i className="fa-brands fa-instagram icon text-2xl hover:text-red-500"></i>
          <i className="fa-regular fa-envelope icon text-2xl hover:text-red-500"></i>
        </div>
      </div>
    </footer>
  );
};

export default Footer;