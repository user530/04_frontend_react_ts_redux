import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import CatCard from '../../components/catCard';
import catService from '../../services/catService';
import { Cat } from '../../graphql/graphql';
import { Dispatch } from '@reduxjs/toolkit';
import { setCats } from './homepageSlice';
import { useDispatch } from 'react-redux';

const CatsContainer = styled.div`
  ${tw`
   max-w-screen-lg
   w-full
   pr-4
   pl-4
   md:pl-0
   md:pr-0
   mb-10
    `}
`;

const Title = styled.h2`
  ${tw`
    text-xl
    lg:text-3xl
    text-black
    font-extrabold
    `}
`;

const CatsWrapper = styled.div`
  ${tw`
    w-full
    flex
    flex-wrap
    justify-center
    mt-7
    md:mt-10
    `}
`;

// Redux dispatch
const actionDispatch = (dispatch: Dispatch) => ({
  setCats: (cats: Cat[]) => dispatch(setCats({ cats })),
});

const Cats = () => {
  const [catData, setCatData] = React.useState<Cat[]>([]);

  // Redux actions
  const { setCats } = actionDispatch(useDispatch());

  const fetchCats = async () => {
    const cats = await catService.getCats().catch((err) => console.error(err));

    // Populate redux store
    if (cats) setCats(cats);
  };

  React.useEffect(() => {
    fetchCats();
  }, []);

  return (
    <CatsContainer>
      <Title>Our lovely employees</Title>
      <CatsWrapper>
        {catData.map((cat, ind) => (
          <CatCard key={ind} {...cat} />
        ))}
      </CatsWrapper>
    </CatsContainer>
  );
};

export default Cats;
