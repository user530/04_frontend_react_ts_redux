import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import CatCard from '../../components/catCard';
import catService from '../../services/catService';
import { catsSelector, setCats } from './homepageSlice';
import { useAppDispatch, useAppSelector } from '../../hooks';

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

const Cats = () => {
  const catData = useAppSelector(catsSelector);

  const dispatch = useAppDispatch();

  const fetchCats = async () => {
    const cats = await catService.getCats().catch((err) => console.error(err));

    // Populate redux store
    if (cats) dispatch(setCats({ cats }));
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
