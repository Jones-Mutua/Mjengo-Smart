// import { faFacebook, faInstagram, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
// import { faMailBulk, faPhoneAlt  } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import tw from "twin.macro";
// import { Logo } from "../logo";

const ContainerFooter = styled.div`
  

  ${tw`flex flex-col justify-center min-w-full pt-10 pb-1 bg-gray-300 md:pt-16 `}
`;
const InnerContainer = styled.div`
  ${tw`flex flex-wrap justify-center w-full h-full max-w-screen-2xl`}
`;

const AboutContainer = styled.div`
  ${tw`flex flex-col mr-8 md:mr-12`}
`;
const AboutText = styled.p`
  ${tw`max-w-xs mt-5 text-sm font-normal leading-5 text-gray-900`};
`;

const SectionContainer = styled.div`
  ${tw`flex flex-col pl-3 pr-3 mt-6 mr-5 md:w-auto md:mr-16`}
`;

const LinksList = styled.ul`
  ${tw`flex flex-col list-none outline-none `};
`;

const BottomContainer = styled.div`
${tw`flex justify-center w-full mt-7 md:justify-start md:mt-1 max-w-screen-2xl`}
`

const CopyRightText = styled.small`
font-size: 11px;
${tw`text-gray-500 `}
`

const ListItem = styled.li`
  ${tw`mb-3 `};

  & > a {
    ${tw`text-sm text-green-500 transition-all hover:text-black `}
  }
`;

const HeaderTitle = styled.h3`
  ${tw`mb-3 text-2xl font-bold text-purple-700 `}
`;

const HorinzontalSection = styled.div`
${tw`flex items-center`}
`
const SmallText = styled.h6`
${tw`text-lg font-normal text-black cursor-pointer hover:text-green-500 `}
`

const RedIcon = styled.span`

${tw`flex items-center justify-center w-5 h-5 mr-2 text-base text-black rounded-full `}
`

export function Foot() {
  return (
    <ContainerFooter>
      <InnerContainer>
        <AboutContainer>
          {/* <Logo color="dark" /> */}
          <AboutText>
            LuxCars ia a car renting oparating stsytem that is used for hire and
            transportin people to thire disired destination.
          </AboutText>
        </AboutContainer>
        <SectionContainer>
        <LinksList>
          <HeaderTitle>Our Links</HeaderTitle>
          <ListItem>
              <Link to="/">Home</Link>
          </ListItem>
          <ListItem>
              <Link to="/about">About Us</Link>
          </ListItem>
          <ListItem>
              <Link to="/rentals">Services</Link>
          </ListItem>
          <ListItem>
              <Link to="/about">FAGS</Link>
          </ListItem>
          <ListItem>
              <Link to="/footer">Contact us</Link>
          </ListItem>
        </LinksList>
        </SectionContainer>
        <SectionContainer>
        <LinksList>
          <HeaderTitle>Services</HeaderTitle>
          <ListItem>
              <Link to="#">Testimonials</Link>
          </ListItem>
          <ListItem>
              <Link to="#">Models</Link>
          </ListItem>
          <ListItem>
              <Link to="#">Support</Link>
          </ListItem>
          <ListItem>
              <Link to="#">Help</Link>
          </ListItem>
          <ListItem>
              <Link to="#">Terms of service</Link>
          </ListItem>
        </LinksList>
        </SectionContainer>
        <SectionContainer>
        <LinksList>
          <HeaderTitle>About</HeaderTitle>
          <ListItem>
              <Link to="/about">Development</Link>
          </ListItem>
          <ListItem>
              <Link to="/login">Sign in</Link>
          </ListItem>
          <ListItem>
              <Link to="/register">Register</Link>
          </ListItem>
          <ListItem>
              <Link to="/about">Pivacy policy</Link>
          </ListItem>
          <ListItem>
              <Link to="/rentals">How it works</Link>
          </ListItem>
        </LinksList>
        </SectionContainer>
        <SectionContainer>
            <HeaderTitle>Our Social</HeaderTitle>
            <HorinzontalSection>
                <RedIcon>
                    {/* <FontAwesomeIcon  icon={faPhoneAlt}/> */}
                </RedIcon>
                <SmallText>+254 759-065-771</SmallText>
            </HorinzontalSection>
            <HorinzontalSection>
                <RedIcon>
                    {/* <FontAwesomeIcon  icon={faTwitter}/> */}
                </RedIcon>
                <SmallText>@mjengo_smart</SmallText>
            </HorinzontalSection>
            <HorinzontalSection>
                <RedIcon>
                    {/* <FontAwesomeIcon  icon={faInstagram}/> */}
                </RedIcon>
                <SmallText>mjengo_smart</SmallText>
            </HorinzontalSection>
            <HorinzontalSection>
                <RedIcon>
                    {/* <FontAwesomeIcon  icon={faLinkedinIn}/> */}
                </RedIcon>
                <SmallText>@smartmjengo_</SmallText>
            </HorinzontalSection>
            <HorinzontalSection>
                <RedIcon>
                    {/* <FontAwesomeIcon  icon={faFacebook}/> */}
                </RedIcon>
                <SmallText>Mjengo Smart</SmallText>
            </HorinzontalSection>
            <HorinzontalSection>
                <RedIcon>
                    {/* <FontAwesomeIcon  icon={faMailBulk}/> */}
                </RedIcon>
                <SmallText>info@mjengosmart.com</SmallText>
            </HorinzontalSection>
        </SectionContainer>
      </InnerContainer>
      <BottomContainer>
          <CopyRightText>Copyright &copy; {new Date().getFullYear()} MjengoSmart. All Rights Reserved</CopyRightText>
      </BottomContainer>
    </ContainerFooter>
  );
}