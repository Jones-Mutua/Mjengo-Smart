import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Link } from "react-router-dom";
import Img11 from "../../assets/img7.jpg";
import Img22 from "../../assets/img5.jpg";
// import { SCREENS } from "../../components/responsive";
// import { Button } from "../../components/Buttons";

const TopSectionContainer = styled.div`
  min-height: 400px;
  margin-top: 6em;
  
  ${tw`flex justify-between w-full pl-3 pr-3 max-w-screen-2xl lg:pl-12 lg:pr-14`}
`;

const LeftContainer = styled.div`
  ${tw`flex flex-col w-1/2 `};
`;

const RightContainer = styled.div`
  ${tw`relative flex flex-col w-1/2 mt-20 `};
`;

const Slogan = styled.h1`
  ${tw`mb-4 text-2xl font-bold text-black xl:text-6xl sm:text-3xl md:text-5xl lg:font-black md:font-extrabold sm:leading-snug lg:leading-normal xl:leading-relaxed`};
`;

const Description = styled.p`
  ${tw`overflow-hidden text-xs text-gray-800 xl:text-lg lg:text-sm sm:max-h-full `};
`;

const BlobContainer = styled.div`
  width: 40em;
  height: 10em;
  position: absolute;
  right: -5em;
  top: -9em;
  z-index: -1;
  transition: rotate(-30deg);

  img {
    width: 100%;
    height: auto;
    max-height: max-content;
  }
  @media (min-width: 500){
      width: 40em;
      max-height: 10em;
      right: -9em;
      top: -16em;
      transform: rotate(-25deg);
  }
  @media (min-width: 765){
      width: 50em;
      max-height: 30em;
      right: -7em;
      top: -15em;
      transform: rotate(-30deg);
  }
  @media (min-width: 8765){
      width: 70em;
      max-height: 30em;
      right: -15em;
      top: -25em;
      transform: rotate(-20deg);
  }
`;

const StandAloneCar = styled.div`
  width: 30em;
  height: 16em;
  right: -10em;
  top: 5em;
  position: absolute;

  img {
    width: auto;
    height: 100%;
    max-width: fit-content;
  }
  @media (min-width: 876){
     height: 16em;
     right: -6em;
     top: -6em;
  }
  @media (min-width:7896){
     height: 21em;
     right: -8em;
     top: -5em;
  }
  @media (min-width:8786){
     height: 30em;
     right: -13em;
     top: -9em;
  }
`;

const ButtomContainer = styled.div`
${tw`flex flex-wrap mt-4`}

`

export function TopSection() {
  return (
    <TopSectionContainer>
      <LeftContainer>
        <Slogan> Premium Quality Cars Rent With Us</Slogan>
        <Description>
            Always choose the best car from our local stores or order it remotely
            at the best price for you and get the best quality cars for as long 
            as you like
        </Description>
        <ButtomContainer>
        <button >nice</button>
        <button >motre</button>
        <Link to="/rentals"></Link>
        </ButtomContainer>
      </LeftContainer>
      <RightContainer>
          <BlobContainer>
              <img src={Img22} alt="" />
          </BlobContainer>
          <StandAloneCar>
              <img src={Img11}  alt=""/>
          </StandAloneCar> 
      </RightContainer>
    </TopSectionContainer>
  );
}