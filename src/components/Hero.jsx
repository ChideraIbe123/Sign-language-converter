import React from 'react';
import styled from 'styled-components';

const HeroContainer = styled.section`
  background-color: #f0f0f0;
  padding: 4em 2em;
  text-align: center;
`;

const HeroTitle = styled.h1`
  font-size: 2.5em;
  color: #333;
`;

const HeroSubtitle = styled.p`
  font-size: 1.2em;
  color: #666;
`;

const Hero = () => {
  return (
    <HeroContainer>
      <HeroTitle>Welcome to Your App</HeroTitle>
      <HeroSubtitle>Upload and share your files securely</HeroSubtitle>
    </HeroContainer>
  );
};

export default Hero;
