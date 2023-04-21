import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

import Logo from '../logo';
import NavItems from './navItems';

const NavbarContainer = styled.div`
  min-height: 68 px;
  ${tw`
  w-full
  max-w-screen-2xl
  flex
  flex-row
  items-center
  pt-2
  pl-3
  pr-3
  lg:pl-12
  lg:pr-12
  justify-between
  `}
`;

const LogoContainer = styled.div``;

const Navbar = () => {
  return (
    <NavbarContainer>
      <LogoContainer>
        <Logo />
      </LogoContainer>

      <NavItems />
    </NavbarContainer>
  );
};

export default Navbar;
