import React from 'react';
import { BsCalendar3 } from 'react-icons/bs';
import { VscTriangleDown, VscTriangleUp } from 'react-icons/vsc';
import styled from 'styled-components';
import tw from 'twin.macro';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

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
    relative
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

const CalendarToggleIcon = styled.span`
  ${tw`
    text-gray-700
    fill-current
    text-xs
    ml-2
    md:text-base
    `}
`;

const Name = styled.span`
  ${tw`
    text-gray-600
    text-xs
    md:text-sm
    cursor-pointer
    select-none
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

const DateCalendar = styled(Calendar)`
  position: absolute;
  max-width: none;
  top: 3em;
  left: -1.5em;
`;

const BookingCard = () => {
  const [startDate, setStartDate] = React.useState<Date>(new Date());
  const [isStartCalendarOpen, setStartCalendarOpen] =
    React.useState<boolean>(false);

  const [returntDate, setReturnDate] = React.useState<Date>(new Date());
  const [isReturnCalendarOpen, setReturnCalendarOpen] =
    React.useState<boolean>(false);

  const toggleStartDateCalendar = () => {
    if (isReturnCalendarOpen) setReturnCalendarOpen(false);
    setStartCalendarOpen((prevState: boolean) => !prevState);
  };

  const toggleReturnDateCalendar = () => {
    if (isStartCalendarOpen) setStartCalendarOpen(false);
    setReturnCalendarOpen((prevState: boolean) => !prevState);
  };

  return (
    <CardContainer>
      <ItemContainer>
        <Icon>
          <BsCalendar3 />
        </Icon>
        <Name onClick={toggleStartDateCalendar}>Pick Up Date</Name>

        <CalendarToggleIcon>
          {isStartCalendarOpen ? <VscTriangleUp /> : <VscTriangleDown />}
        </CalendarToggleIcon>

        {isStartCalendarOpen ? (
          <DateCalendar value={startDate} onChange={setStartDate as any} />
        ) : null}
      </ItemContainer>
      <LineSeparator />
      <ItemContainer>
        <Icon>
          <BsCalendar3 />
        </Icon>
        <Name onClick={toggleReturnDateCalendar}>Return Date</Name>

        <CalendarToggleIcon>
          {isReturnCalendarOpen ? <VscTriangleUp /> : <VscTriangleDown />}
        </CalendarToggleIcon>

        {isReturnCalendarOpen ? (
          <DateCalendar value={returntDate} onChange={setReturnDate as any} />
        ) : null}
      </ItemContainer>

      <Marginer direction="horizontal" margin="2em" />

      <Button text="Pick Your Cat" />
    </CardContainer>
  );
};

export default BookingCard;
