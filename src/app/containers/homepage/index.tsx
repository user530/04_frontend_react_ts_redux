import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

import NavbarComponent from '../../components/navbar';

const PageContainer = styled.div`
  ${tw`
    flex
    flex-col
    w-full
    h-full
    items-center
    overflow-x-hidden
    `}
`;

const HomePage = () => {
  return (
    <PageContainer>
      <NavbarComponent />
    </PageContainer>
  );
};

export default HomePage;
