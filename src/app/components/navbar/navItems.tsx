import React from 'react';
import { useMediaQuery } from 'react-responsive';
import styled, { css } from 'styled-components';
import tw from 'twin.macro';
import { SCREENS } from '../responsive';
import { slide as Menu } from 'react-burger-menu';
import menuStyle from './menuStyle';

const ListContainer = styled.ul`
  ${tw`
    flex
    list-none
    `}
`;

const NavItem = styled.li<{ menu?: any }>`
  ${tw`
    text-xs
    md:text-base
    text-black
    font-medium
    mr-1
    md:mr-5
    cursor-pointer
    transition
    duration-300
    ease-in-out
    hover:text-gray-700
    `}

  ${({ menu }) =>
    menu &&
    css`
      ${tw`
    text-white
    text-xl
    mb-3
    focus:text-white
    `}
    `}
`;

const NavItems = () => {
  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });

  const content = (
    <ListContainer>
      <NavItem menu={isMobile}>
        <a href="#">Home</a>
      </NavItem>

      <NavItem menu={isMobile}>
        <a href="#">Cats</a>
      </NavItem>

      <NavItem menu={isMobile}>
        <a href="#">Services</a>
      </NavItem>

      <NavItem menu={isMobile}>
        <a href="#">Contact Us</a>
      </NavItem>
    </ListContainer>
  );

  if (isMobile)
    return (
      <Menu styles={menuStyle} right>
        {content}
      </Menu>
    );
  else return { ...content };
};

export default NavItems;
