import React, { useState } from 'react';
import { FaBars, FaTimes, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import Logo from '../assets/KhushiParekhinitals.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav(!nav);
    console.log('nav state:', !nav); // Debugging log
  };

  return (
    <div className="fixed w-full h-20 flex justify-between items-center px-4 bg-[#0a192f] text-gray-50">
      <div className="w-12">
        <img src={Logo} alt="Khushi Parekh Logo" />
      </div>
      
      <ul className="hidden md:flex md:space-x-5">
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      
      {/* Hamburger */}
      <div className="md:hidden cursor-pointer z-10" onClick={handleClick}>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      
      {/* Mobile Menu */}
      <ul className={!nav ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"}>
        <li className="py-6 text-2xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-2xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-2xl">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-2xl">
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="py-6 text-2xl">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      
      {/* Social icons */}
      <div className="fixed flex flex-col top-[35%] left-0">
        <ul>
          <li className="hidden md:w-[160px] md:h-[60px] md:flex md:justify-between p-1 md:items-center md:ml-[-120px] md:hover:ml-[-0px] md:duration-300 md:bg-blue-600">
            <a className="flex justify-between items-center w-full text-white" href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="hidden md:w-[160px] md:h-[60px] md:flex md:justify-between p-1 md:items-center md:ml-[-120px] md:hover:ml-[-0px] md:duration-300 md:bg-gray-800">
            <a className="flex justify-between items-center w-full text-white" href="https://www.github.com" target="_blank" rel="noopener noreferrer">
              GitHub <FaGithub size={30} />
            </a>
          </li>
          <li className="hidden md:w-[160px] md:h-[60px] md:flex md:justify-between md:items-center p-1 md:ml-[-120px] md:hover:ml-[-0px] md:duration-300 md:bg-pink-600">
            <a className="flex justify-between items-center w-full text-white" href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              Instagram <FaInstagram size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;






