import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

import blob from '../../../assets/images/Blob.svg';
import thumbnail from '../../../assets/images/cat-thumbnail.png';
import { SCREENS } from '../../components/responsive';
import Button from '../../components/button';

const TopSectionContainer = styled.div`
  min-height: 250px;
  margin-top: 6em;
  ${tw`
    w-full
    max-w-screen-2xl
    flex
    justify-between
    pl-3
    pr-3
    lg:pl-12
    lg:pr-12
`};

  @media (min-width: ${SCREENS.md}) {
    min-height: 400px;
  }
`;

const LeftContainer = styled.div`
  ${tw`
    w-1/2
    flex
    flex-col
    `}
`;

const RightContainer = styled.div`
  ${tw`
    w-1/2
    flex
    flex-col
    relative
    mt-20
    absolute
    right-0
    top-0
    bottom-0
    `}
`;

const Slogan = styled.h1`
  ${tw`
    font-bold
    text-2xl
    xl:text-6xl
    sm:text-3xl
    md:text-5xl
    lg:font-black
    md:font-extrabold
    text-black
    align-baseline
    mb-4
    sm:leading-snug
    lg:leading-normal
    xl:leading-relaxed
    `}
`;

const Description = styled.p`
  ${tw`
    text-xs
    lg:text-sm
    xl:text-lg
    sm:max-h-full
    overflow-hidden
    max-h-12
    text-gray-800
    `}
`;

const BlobContainer = styled.div`
  width: 20em;
  height: 10em;
  position: absolute;
  right: -5em;
  top: -9em;
  z-index: -1;
  transform: rotate(-30deg);

  img {
    width: 100%;
    height: auto;
    max-height: max-content;
  }

  @media (min-width: ${SCREENS.sm}) {
    width: 40em;
    min-height: 10em;
    right: -9em;
    top: -16em;
    transform: rotate(-25deg);
  }

  @media (min-width: ${SCREENS.lg}) {
    width: 40em;
    min-height: 10em;
    right: -7em;
    top: -15em;
    transform: rotate(-30deg);
  }

  @media (min-width: ${SCREENS.xl}) {
    width: 70em;
    min-height: 30em;
    right: -15em;
    top: -25em;
    transform: rotate(-20deg);
  }
`;

const StandaloneImage = styled.div`
  width: auto;
  height: 10em;
  right: -5em;
  top: -5em;
  position: absolute;

  img {
    width: auto;
    height: 100%;
    max-width: fit-content;
  }

  @media (min-width: ${SCREENS.sm}) {
    height: 16em;
    right: -6em;
    top: -6em;
  }

  @media (min-width: ${SCREENS.lg}) {
    height: 21em;
    right: -8em;
    top: -5em;
  }

  @media (min-width: ${SCREENS.xl}) {
    height: 30em;
    right: -13em;
    top: -9em;
  }
`;

const ButtonsContainer = styled.div`
  ${tw`
    flex
    flex-wrap
    mt-4
    `}
`;

const TopSection = () => {
  return (
    <TopSectionContainer>
      <LeftContainer>
        <Slogan>Get yourself purrfect companion!</Slogan>

        <Description>
          “In ancient times cats were worshipped as gods; they have not
          forgotten this.” – Terry Pratchett
        </Description>

        <ButtonsContainer>
          <Button text="Get your cat!" />
          <Button theme="filled" text="Visit our cat cafe" />
        </ButtonsContainer>
      </LeftContainer>

      <RightContainer>
        <BlobContainer>
          <img src={blob} alt="background-blob" />
        </BlobContainer>

        <StandaloneImage>
          <img src={thumbnail} alt="thumbnail" />
        </StandaloneImage>
      </RightContainer>
    </TopSectionContainer>
  );
};

export default TopSection;
