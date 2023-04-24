import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { SCREENS } from '../../components/responsive';

import catImg from '../../../assets/images/cat_play.png';

const AboutUsContainer = styled.div`
  ${tw`
    w-full
    flex
    flex-wrap
    items-center
    justify-center
    pt-4
    pb-4
    pr-7
    pl-7
    md:pl-0
    md:pr-0
    bg-white
    `}
`;

const CardContainer = styled.div`
  height: 15em;
  margin-left: -30px;
  width: auto;

  img {
    width: auto;
    height: 100%;
  }

  @media (min-width: ${SCREENS.md}) {
    height: 28em;
  }

  @media (min-width: ${SCREENS.lg}) {
    height: 30em;
  }

  @media (min-width: ${SCREENS['2xl']}) {
    height: 35em;
    margin-left: 0;
  }
`;

const InfoContainer = styled.div`
  ${tw`
    md:w-1/2
    flex
    flex-col
    md:ml-6
    2xl:ml-16
    `}
`;

const Title = styled.h2`
  ${tw`
    text-black
    text-xl
    text-left
    md:text-3xl
    font-extrabold
    md:font-black
    md:leading-normal
    `}
`;

const InfoText = styled.p`
  ${tw`
    md:max-w-2xl
    text-gray-500
    text-sm
    text-left
    md:text-base
    mt-4
    font-normal
    `}
`;

const AboutUs = () => {
  return (
    <AboutUsContainer>
      <CardContainer>
        <img src={catImg} alt="cat-playing" />
      </CardContainer>
      <InfoContainer>
        <Title>Learn more about our service</Title>
        <InfoText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem at
          pariatur laboriosam sint, ut modi facilis quibusdam omnis! Explicabo
          rem corporis molestias cupiditate? Dicta earum et ea. Ratione,
          laudantium eveniet. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Accusantium nihil architecto animi tempora quo
          perferendis commodi earum autem fugit exercitationem esse nesciunt
          ipsum porro sapiente alias ab, laboriosam aliquam libero. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Excepturi iure, culpa
          delectus nulla quaerat provident eius consequatur vel sed inventore
          placeat. Doloribus cupiditate quam repellendus reprehenderit minima,
          aliquid incidunt magni.
        </InfoText>
      </InfoContainer>
    </AboutUsContainer>
  );
};

export default AboutUs;
