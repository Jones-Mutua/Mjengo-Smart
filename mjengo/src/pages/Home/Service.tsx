import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
// import { SCREENS } from "../../components/responsive";
import Img33 from "../../assets/img1.jpg"

const AboutUsContainer = styled.div`

  ${tw`flex flex-wrap items-center   justify-center w-full pt-20 pb-4 lg:pb-28 pr-7 pl-11 md:pl-0 md:pr-0`};
`;

const CarContainer = styled.div`
  width: auto;
  height: 20em;

  margin-left: -3.5em;

  img {
    width: auto;
    height: 100%;
  }

  @media (min-width:656) {
    height: 28em;
  }
  @media (min-width: 765) {
    height: 30em;
  }
  @media (min-width: 466) {
    height: 35em;
    margin-left: 0;
  }
`;

const InforContainer = styled.div`
${tw`flex flex-col md:w-1/2 md:ml-6 2xl:ml-16`};


`;

const Title = styled.h1`
${tw`text-2xl font-extrabold text-black md:text-5xl md:font-black md:leading-normal`};

`;

const InfoText = styled.p`
${tw`mt-4 text-sm font-normal text-gray-500 md:max-w-2xl md:text-base`}
`



export function AboutUs() {
    return (
        <AboutUsContainer>
            <CarContainer>
                <img src={Img33} alt=""/>
            </CarContainer>
            <InforContainer>
                <Title>
                  Luxy experience with our rentals Cars 
                </Title>
                <InfoText>
                    Are you with try our best premium cars for your luxy and get the best deals with us.Which are 
                    of high stardands level.Then you fill comfy as you belch along the ways.
                </InfoText>
            </InforContainer>
        </AboutUsContainer>

    )
}