import React from 'react';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { SiGeeksforgeeks } from "react-icons/si";
import { BiLogoGmail } from "react-icons/bi";


const Footer = () => {
  return (
    <footer className=" bg-gray-800 text-white py-8">
      <div className="container mx-auto flex justify-between items-center font-bold">
        <div className="footer_feded_text text-3xl text-gray-300 opacity-70 drop-shadow-md py-4">Anjali Gupta</div>
        <div className="link_wrapper flex gap-4">
          <div><a href="#projects" className="hover:text-red-500">Projects</a></div>
          <div><a href="#skills" className="hover:text-red-500">Skills</a></div>
          <div><a href="#contact" className="hover:text-red-500">Contact Me</a></div>
        </div>
        <div className="icon_wrapper flex gap-4">
          <i className=" text-2xl hover:text-red-500"><FaLinkedin /></i>
          <i className=" text-2xl hover:text-red-500"><FaGithub /></i>
          <i className=" text-2xl hover:text-red-500"><SiLeetcode /></i>
          <i className=" text-2xl hover:text-red-500"><BiLogoGmail /></i>
          <i className=" text-2xl hover:text-red-500"><SiGeeksforgeeks /></i>
        </div>
      </div>
    </footer>
  );
};

export default Footer;