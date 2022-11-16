import { FaBars, FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import "@fontsource/montserrat";

export const Nav = styled.nav`
  background: rgba(213, 206, 225, 0.6);
  height: 85px;
  display: flex;
  justify-content: space-between;
  z-index: 12;
  position: sticky;
  top: 0;
  backdrop-filter: blur(6px);
  padding: 0.2rem calc((100vw - 1000px) / 2);

`;
  
export const NavLink = styled(Link)`
  color: #4A3269;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  font-family: "Montserrat";
  cursor: pointer;
  &:hover {
    transition: all 0.2s ease-in-out;
    color: white;
  }
  &.active {
    color: white;
    font-weight: 900;
  }
`;
  
export const Bars = styled(FaBars)`
  display: none;
  color:  #4A3269;
  align-items: center;
  z-index: 10;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
    &.active {
      color: white;
    }
  }
`;
  
export const NavIcons = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  margin-left: 24px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
  
export const NavMenu = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const LinkedIn = styled (FaLinkedin)`
  color: #4A3269;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  cursor: pointer;
  &:hover {
    transition: all 0.2s ease-in-out;
    color: white;
  }
`; 
export const Email = styled (MdEmail)`
  color: #4A3269;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  &:hover {
    transition: all 0.2s ease-in-out;
    color: white;
  }
`; 
export const GitHub = styled (FaGithub)`
  color: #4A3269;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  &:hover {
    transition: all 0.2s ease-in-out;
    color: white;
  }
`;