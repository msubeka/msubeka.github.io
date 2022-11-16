import React from 'react';
import "./pages.css";
import Profile from "./assets/me2.jpg";
import { fadeIn } from "react-animations";
import styled, { keyframes } from 'styled-components';

const fadeInAnimation = keyframes`${fadeIn}`;
const FadeDiv = styled.div`
  animation: 1s ${fadeInAnimation};
`;
  
const About = () => {
  return (
    <div>
      <FadeDiv>
        <div class="container">
          <div class="column-1 box">
              <h1>Hey! I'm Subeka Manokanthan</h1>
              <p>
                  I'd like to think I wear multiple hats, both in my professional and personal life. I can be described as a(n): 
                  <ul>
                    <li>Systems Design Engineering Student at the University of Waterloo</li>
                    <li>Aspiring Product Manager</li>
                    <li>Coffee (of all types) Addict</li>
                    <li>Musician, and Music Lover</li>
                    <li>Avid Acapella Singer</li>
                    <li>Procastinator</li>
                    <li>ENFP!</li>
                  </ul>
                  Want to chat? Feel free to set up a time! 
                  <br />
                  <br />
                  <a href="https://calendly.com/subeka/coffee-chat" style={{color: "#4A3269", marginRight: "48px", paddingLeft: "15px"}} target="_blank" rel="noopener noreferrer"><button class='chat'>Chat with me!</button></a>
              </p>
          </div>
          <div class="column-2 box">
              <img src={Profile} style={{width:'100%', height:'auto', borderRadius: '12px'}}></img>
          </div>
        </div>
      </FadeDiv>
    </div>
  );
};
  
export default About;