import React from 'react';
import "./pages.css";
import Logo from "./assets/logo.png";
import AnimatedText from "./AnimatedText";
import { fadeIn } from "react-animations";
import styled, { keyframes } from 'styled-components';

const fadeInAnimation = keyframes`${fadeIn}`;
const FadeDiv = styled.div`
  animation: 1s ${fadeInAnimation};
`;

const Home = () => {
  return (
    <div>
      <FadeDiv>
        <h1 class="animated">Subeka Manokanthan</h1>
        <AnimatedText />
      </FadeDiv>
    </div>
  );
};
  
export default Home;