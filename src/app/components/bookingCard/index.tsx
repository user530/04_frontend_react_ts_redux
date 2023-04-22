import React from 'react';
import { BsCalendar3 } from 'react-icons/bs';
import styled from 'styled-components';
import tw from 'twin.macro';

import Marginer from '../marginer';
import Button from '../button';

const CardContainer = styled.div`
  min-height: 4.3em;
  box-shadow: 0 1.3px 12px 1px rgba(0, 0, 0, 0.6);
  ${tw`
flex
justify-center
items-center
rounded-md
bg-white
mt-2
mb-2
mr-2
ml-2
pt-1
pb-1
pr-2
pl-2
md:pt-2
md:pb-2
md:pl-6
md:pr-6
`}
`;

const ItemContainer = styled.div`
  ${tw`
    flex
    `}
`;

const Icon = styled.span`
  ${tw`
    text-red-500
    fill-current
    text-xs
    md:text-base
    mr-1
    md:mr-3
    `}
`;

const Name = styled.span`
  ${tw`
    text-gray-600
    text-xs
    md:text-sm
    `}
`;

const LineSeparator = styled.span`
  width: 2px;
  height: 45%;
  ${tw`
    bg-gray-300
    mr-2
    ml-2
    md:mr-5
    md:ml-5
    `}
`;

const BookingCard = () => {
  return (
    <CardContainer>
      <ItemContainer>
        <Icon>
          <BsCalendar3 />
        </Icon>
        <Name>Pick Up Date:</Name>
      </ItemContainer>
      <LineSeparator />
      <ItemContainer>
        <Icon>
          <BsCalendar3 />
        </Icon>
        <Name>Return Date:</Name>
      </ItemContainer>

      <Marginer direction="horizontal" margin="2em" />

      <Button text="Pick Your Cat" />
    </CardContainer>
  );
};

export default BookingCard;
