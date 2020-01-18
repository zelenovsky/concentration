import React, { FC } from 'react';
import styled from 'styled-components';
import { color, ColorProps, border, BorderProps } from 'styled-system';

type StyledCardProps = ColorProps & BorderProps;

const StyledCard = styled.button.attrs(() => ({
    type: "button"
}))<StyledCardProps>`
  display: block;
  padding: 8rem 2rem;
  font-size: 6rem;
  cursor: pointer;
  ${color};
  ${border};
`;

export interface CardProps {
    content: string
}

const Card: FC<CardProps> = ({ content }) => {
    return (
        <StyledCard bg="black" borderRadius={2}>
            { content }
        </StyledCard>
    )
};

export default Card;
