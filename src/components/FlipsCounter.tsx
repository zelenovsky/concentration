import React, { FC } from 'react';
import styled from 'styled-components';
import { color, ColorProps, space, SpaceProps } from 'styled-system';

export interface IFlipsCounter {
    count: number;
}

const StyledFlipsCounter = styled.h4<ColorProps & SpaceProps>`
  font-size: 4rem;
  ${color};
  ${space};
`;

const FlipsCounter: FC<IFlipsCounter> = ({ count }) => {
    return (
        <StyledFlipsCounter ml="auto" mt={0} mb={3} color="black">
            Flips: { count }
        </StyledFlipsCounter>
    );
};

export default FlipsCounter;
