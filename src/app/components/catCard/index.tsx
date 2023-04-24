import React from 'react';
import { FaCat } from 'react-icons/fa';
import { ImSpoonKnife } from 'react-icons/im';
import { VscSymbolColor } from 'react-icons/vsc';
import styled from 'styled-components';
import tw from 'twin.macro';
import { ICat } from '../../types/cat';
import Button from '../button';

const CatCardContainer = styled.div`
  width: 16.5em;
  max-width: 16.5em;
  min-height: 25.5em;
  max-height: 25.5em;
  box-shadow: 0 1.3px 17px -2px rgba(0, 0, 0, 0.4);
  ${tw`
    flex
    flex-col
    items-center
    p-3
    pb-4
    bg-white
    rounded-md
    m-1
    sm:m-3
    md:m-6
    `}
`;

const CatImage = styled.div`
  max-width: 100%;
  height: auto;
  display: flex;
  justify-content: center;

  img {
    height: 200px;
  }
`;

const CatName = styled.h3`
  ${tw`
    text-base
    font-bold
    text-black
    mt-1
    mb-1
    `}
`;

const PricesContainer = styled.div`
  ${tw`
    w-full
    flex
    justify-start
    mt-3
    `}
`;

const SmallText = styled.p`
  color: inherit;
  ${tw`
    text-xs
    font-thin
    `}
`;

const DailyPrice = styled.h5`
  ${tw`
    text-red-500
    font-bold
    text-sm
    mr-3
    `}
`;

const MonthlyPrice = styled.h5`
  ${tw`
    text-gray-500
    font-bold
    text-sm
    `}
`;

const SmallIcon = styled.span`
  ${tw`
    text-gray-400
    text-sm
    mr-1
    `}
`;

const CatDetailsContainer = styled.div`
  ${tw`
    flex
    w-full
    justify-between
    `}
`;

const CatDetail = styled.span`
  ${tw`
    flex
    items-center
    `}
`;

const CatInfo = styled.h6`
  ${tw`
    text-gray-400
    text-xs
    `}
`;

const Separator = styled.div`
  min-width: 100%;
  min-height: 2px;
  ${tw`
    flex
    bg-gray-300
    mb-2
    mt-2
    `}
`;

const RentButton = styled(Button)`
  ${tw`
    min-w-full
    mt-5
    `}
`;

interface ICatProp extends ICat {}

const CatCard = (props: ICatProp) => {
  const { name, imgSrc, dailyPrice, monthlyPrice, color, age, favoriteFood } =
    props;

  return (
    <CatCardContainer>
      <CatImage>
        <img src={imgSrc} alt={`photo-${name}`} />
      </CatImage>

      <CatName>{name}</CatName>

      <PricesContainer>
        <DailyPrice>
          {dailyPrice} <SmallText>Rub/day</SmallText>
        </DailyPrice>

        <MonthlyPrice>
          {monthlyPrice} <SmallText>Rub/mon</SmallText>
        </MonthlyPrice>
      </PricesContainer>

      <Separator />

      <CatDetailsContainer>
        <CatDetail>
          <SmallIcon>
            <FaCat title="Age" />
          </SmallIcon>
          <CatInfo>{age}</CatInfo>
        </CatDetail>

        <CatDetail>
          <SmallIcon>
            <VscSymbolColor title="Color" />
          </SmallIcon>
          <CatInfo>{color}</CatInfo>
        </CatDetail>

        <CatDetail>
          <SmallIcon>
            <ImSpoonKnife title="Favorite food" />
          </SmallIcon>
          <CatInfo>{favoriteFood}</CatInfo>
        </CatDetail>
      </CatDetailsContainer>

      <RentButton text="Rent" />
    </CatCardContainer>
  );
};

export default CatCard;
