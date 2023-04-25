import React from 'react';
import { AiOutlinePhone, AiOutlineMail } from 'react-icons/ai';
import styled from 'styled-components';
import tw from 'twin.macro';
import Logo from '../logo';

const FooterContainer = styled.footer`
  min-height: 30em;
  ${tw`
    flex
    flex-col
    gap-5
    min-w-full
    bg-gray-400
    pt-4
    md:pt-12
    pb-1
    text-left
    `}
`;

const FooterInner = styled.div`
  ${tw`
    flex
    gap-3
    flex-wrap
    w-full
    h-full
    max-w-screen-2xl
    mr-1.5
    ml-1.5
    `}
`;

const AboutContainer = styled.div`
  ${tw`
    flex
    flex-col
    `}
`;

const AboutText = styled.p`
  ${tw`
    text-white
    text-sm
    font-light
    max-w-xs
    leading-6
  `}
`;

const LinksContainer = styled.div`
  ${tw`
    flex
    flex-col
    mr-2
    md:mr-16
  `}
`;

const LinksList = styled.ul`
  ${tw`
    outline-none
    list-none
    flex
    flex-col
    pl-0
  `}
`;

const ListLink = styled.li`
  ${tw`
    mb-3
  `}

  & > a {
    ${tw`
    text-sm
    text-white
    transition-all
    hover:text-gray-300
    no-underline
    `}
  }
`;

const HeaderTitle = styled.h3`
  ${tw`
    text-xl
    font-bold
    text-white
    mb-3
  `}
`;

const HorizontalSection = styled.div`
  ${tw`
    flex
    items-center
  `}
`;

const FooterIcon = styled.span`
  ${tw`
    w-8
    h-8
    rounded-full
    flex
    items-center
    justify-center
    text-white
    text-base
    mr-2
    bg-red-500
  `}
`;

const SmallText = styled.div`
  ${tw`
    text-sm
    text-white
  `}
`;

const BottomContainer = styled.div`
  ${tw`
    flex
    w-full
    max-w-screen-2xl
    justify-start
    mr-1.5
    ml-1.5
  `}
`;

const CopyrightText = styled.small`
  font-size: 11px;
  ${tw`
    text-yellow-50
  `}
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterInner>
        <AboutContainer>
          <Logo color="white" />
          <AboutText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            sint delectus ratione iste quod, quia vero? Praesentium explicabo
            maiores ab.
          </AboutText>
        </AboutContainer>

        <LinksContainer>
          <HeaderTitle>Our Links</HeaderTitle>
          <LinksList>
            <ListLink>
              <a href="#">Home</a>
            </ListLink>
            <ListLink>
              <a href="#">About Us</a>
            </ListLink>
            <ListLink>
              <a href="#">Services</a>
            </ListLink>
            <ListLink>
              <a href="#">Cats</a>
            </ListLink>
          </LinksList>
        </LinksContainer>

        <LinksContainer>
          <HeaderTitle>Other Links</HeaderTitle>
          <LinksList>
            <ListLink>
              <a href="#">FAQ</a>
            </ListLink>
            <ListLink>
              <a href="#">Contact Us</a>
            </ListLink>
            <ListLink>
              <a href="#">Privacy Policy</a>
            </ListLink>
            <ListLink>
              <a href="#">Terms & Conditions</a>
            </ListLink>
          </LinksList>
        </LinksContainer>

        <LinksContainer>
          <HeaderTitle>Call Us</HeaderTitle>
          <HorizontalSection>
            <FooterIcon>
              <AiOutlinePhone />
            </FooterIcon>
            <SmallText>+0-123-456-7890</SmallText>
          </HorizontalSection>
        </LinksContainer>

        <LinksContainer>
          <HeaderTitle>Email Us</HeaderTitle>
          <HorizontalSection>
            <FooterIcon>
              <AiOutlineMail />
            </FooterIcon>
            <SmallText>some@mail.com</SmallText>
          </HorizontalSection>
        </LinksContainer>
      </FooterInner>

      <BottomContainer>
        <CopyrightText>
          Copyright {new Date().getFullYear()}. All rights reserved.
        </CopyrightText>
      </BottomContainer>
    </FooterContainer>
  );
};

export default Footer;
