import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

import Navbar from '../../components/navbar';
import TopSection from './topSection';
import BookingCard from '../../components/bookingCard';

const PageContainer = styled.div`
  ${tw`
    flex
    flex-col
    w-full
    h-full
    items-center
    relative
    overflow-x-hidden
    `}
`;

const HomePage = () => {
  return (
    <PageContainer>
      <Navbar />
      <TopSection />
      <BookingCard />
    </PageContainer>
  );
};

export default HomePage;
