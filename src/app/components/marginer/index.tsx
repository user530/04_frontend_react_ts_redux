import React from 'react';
import styled from 'styled-components';

export interface IMarginerProps {
  margin: number | string;
  direction?: 'horizontal' | 'vertical';
}

const HorizontalMargin = styled.span<Pick<IMarginerProps, 'margin'>>`
  display: flex;
  min-width: ${({ margin }) =>
    typeof margin === 'string' ? margin : `${margin}px`};
`;

const VerticalMargin = styled.span<Pick<IMarginerProps, 'margin'>>`
  display: flex;
  min-height: ${({ margin }) =>
    typeof margin === 'string' ? margin : `${margin}px`};
`;

const Marginer = (props: IMarginerProps) => {
  const { direction, margin } = props;

  if (direction === 'horizontal') return <HorizontalMargin margin={margin} />;
  else return <VerticalMargin margin={margin} />;
};

export default Marginer;
