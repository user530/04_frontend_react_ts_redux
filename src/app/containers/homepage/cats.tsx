import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import CatCard from '../../components/catCard';

import { cats } from '../../consts/data';
import catService from '../../services/catService';
import { Cat } from '../../graphql/graphql';

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
  // Placeholder dummy data
  // const catData = cats;

  const [catData, setCatData] = React.useState<Cat[]>([]);

  const fetchCats = async () => {
    const cats = await catService.getCats().catch((err) => console.error(err));

    console.log('Fetch cars:', cats);

    return cats as Cat[];
  };

  React.useEffect(() => {
    fetchCats();
    // const data = fetchCats().then((data) => setCatData(data));
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
