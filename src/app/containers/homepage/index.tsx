import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

import Navbar from '../../components/navbar';
import TopSection from './topSection';
import BookingCard from '../../components/bookingCard';
import BookingSteps from './bookingSteps';
import Marginer from '../../components/marginer';
import AboutUs from './aboutUs';
import Cats from './cats';
import Footer from '../../components/footer';

const PageContainer = styled.div`
  ${tw`
    flex
    flex-col
    w-full
    h-full
    items-center
    relative
    `}
`;

const HomePage = () => {
  return (
    <PageContainer>
      <Navbar />
      <TopSection />
      <Marginer direction="vertical" margin="4em" />
      <BookingCard />
      <Marginer direction="vertical" margin="10em" />
      <BookingSteps />
      <Marginer direction="vertical" margin="7em" />
      <AboutUs />
      <Marginer direction="vertical" margin="7em" />
      <Cats />
      <Footer />
    </PageContainer>
  );
};

export default HomePage;
