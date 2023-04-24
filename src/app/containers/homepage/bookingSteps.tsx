import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { GrLocation, GrCalendar, GrUser } from 'react-icons/gr';

const BookingStepsContainer = styled.div`
  ${tw`
    w-full
    flex
    flex-col
    items-center
    pt-3
    pb-3
    lg:pt-6
    lg:pb-6
    `}
`;

const Title = styled.h2`
  ${tw`
    text-xl
    lg:text-4xl
    text-black
    font-extrabold
    `}
`;

const StepsContainer = styled.div`
  ${tw`
    flex
    justify-evenly
    flex-wrap
    mt-7
    lg:mt-16
    `}
`;
const SingleStepContainer = styled.div`
  ${tw`
    flex
    flex-col
    md:w-96
    items-center
    transition-colors
    hover:text-red-500
    m-3
    `}
`;

const Step = styled.div`
  box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.4);

  ${tw`
    flex
    rounded-lg
    items-center
    justify-center
    p-6
    `}
`;

const StepTitle = styled.h4`
  ${tw`
text-black
text-lg
font-semibold
mt-4
`}
`;

const StepDescription = styled.p`
  ${tw`
    w-10/12
    text-xs
    md:text-sm
    text-center
    text-gray-600
    `}
`;

const StepIcon = styled.span`
  ${tw`
    text-red-500
    text-3xl
    `}
`;

const BookingSteps = () => {
  return (
    <BookingStepsContainer>
      <Title>3 Easy Steps:</Title>

      <StepsContainer>
        <SingleStepContainer>
          <Step>
            <StepIcon>
              <GrLocation />
            </StepIcon>
          </Step>
          <StepTitle>Choose Location</StepTitle>
          <StepDescription>
            Find the nearest Cat hotel to pick up your new friend.
          </StepDescription>
        </SingleStepContainer>

        <SingleStepContainer>
          <Step>
            <StepIcon>
              <GrCalendar />
            </StepIcon>
          </Step>
          <StepTitle>Book the Date</StepTitle>
          <StepDescription>
            Book the date to visit cat hotel and pick up your cat.
          </StepDescription>
        </SingleStepContainer>

        <SingleStepContainer>
          <Step>
            <StepIcon>
              <GrUser />
            </StepIcon>
          </Step>
          <StepTitle>Come to visit</StepTitle>
          <StepDescription>
            Come to visit us, meet with your pet and get him to his new home.
          </StepDescription>
        </SingleStepContainer>
      </StepsContainer>
    </BookingStepsContainer>
  );
};

export default BookingSteps;
