import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

import logo from '../../../assets/images/logo.png';

const LogoContainer = styled.div`
  ${tw`
    flex
    items-center
    `};
`;

const LogoText = styled.div`
  ${tw`
    text-xl
    md:text-2xl
    font-bold   
    text-black
    m-1
    `}

  ${({ color }: any) => (color === 'white' ? tw`text-white` : tw`text-black`)}
`;

const LogoImage = styled.div`
  width: auto;

  img {
    width: auto;
    height: 100%;
  }

  ${tw`
  h-9
  md:h-12
  `}
`;

interface ILogoProps {
  color?: 'white' | 'dark';
}

const Logo = (props: ILogoProps) => {
  const { color } = props;

  return (
    <LogoContainer>
      <LogoImage>
        <img src={logo} alt="logo" />
      </LogoImage>

      <LogoText color={color || 'dark'}>Rent a cat</LogoText>
    </LogoContainer>
  );
};

export default Logo;
