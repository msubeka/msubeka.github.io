import React, {useState} from 'react';
import { FaBars, FaLinkedin, FaGithub, FaGit } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import 
{
  Nav,
  NavLink,
  Bars,
  NavIcons,
  NavMenu,
  LinkedIn,
  Email,
  GitHub,
} from './NavbarElements';
import Logo from './assets/logo.png';
import './bar.css';

const logoStyle = {};

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const handleToggle = () => {
    setNavbarOpen(prev => !prev)
  }
  return (
    <>
        <Nav>
        <Bars />
        <NavIcons>
        <a href='https://www.linkedin.com/in/subeka-m/'>
          <LinkedIn size={22} />
        </a>
        <a href="mailto:smanokan@uwaterloo.ca">
          <Email size={25} />
        </a>
        <a href="https://github.com/msubeka">
          <GitHub size={20} />
        </a>
        <a href="https://drive.google.com/file/d/1K48HXQOaycfm3azSJFYeo8G_A6C5plAe/view" style={{marginRight: "48px", paddingLeft: "15px", "&:hover": {color: "white"}}} target="_blank" rel="noopener noreferrer">Resume</a>
        </NavIcons>
        <img src={Logo} style={{logoStyle}}/>
        <NavMenu>
          <NavLink to='/' activeStyle>
            Home
          </NavLink>
          <NavLink to='/about' activeStyle>
            About
          </NavLink>
          <NavLink to='/experiences' activeStyle>
            Experiences
          </NavLink>
        </NavMenu>  
        <button onClick={handleToggle}><Bars /></button>
        <div className={`${navbarOpen ? "darkenScreen" : ""}`}></div>
        <ul className={`menuNav ${navbarOpen ? " showMenu" : " closeMenu"}`}>
          <li><a href='/'>Home</a></li>
          <li><a href='/about'>About</a></li>
          <li><a href='/experiences'>Experiences</a></li>
          <li> <a href="https://drive.google.com/file/d/1K48HXQOaycfm3azSJFYeo8G_A6C5plAe/view" target="_blank" rel="noopener noreferrer">Resume</a></li>
          <li><a href='https://www.linkedin.com/in/subeka-m/' target="_blank" rel="noopener noreferrer">Linkedin <FaLinkedin /></a></li>
          <li><a href ="mailto:smanokan@uwaterloo.ca" target="_blank" rel="noopener noreferrer">Email <MdEmail /></a></li>
          <li><a href ="https://github.com/msubeka" target="_blank" rel="noopener noreferrer">Github <FaGithub /></a></li>
        </ul> 
      </Nav>

      
    </>
  );
};
  
export default Navbar;