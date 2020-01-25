import React, { FC, MouseEvent } from 'react';
import styled from 'styled-components';
import { color, ColorProps, border, BorderProps, typography, TypographyProps } from 'styled-system';

interface isMatched {
    isMatched: boolean;
}

interface isFaceUp {
    isFaceUp: boolean;
}

export interface ICard extends isMatched, isFaceUp {
    id: number;
    emoji: string;
}

export interface ICardEventHandler {
    onClick: (e: MouseEvent) => void;
}

const StyledCard = styled.button.attrs(() => ({
    type: "button"
}))<isMatched>`
    position: relative;
    display: block;
    padding: 0;
    cursor: pointer;
    pointer-events: ${({ isMatched }) => isMatched ? "none" : "all"};
    border: none;
    background-color: transparent;
    opacity: ${({ isMatched }) => isMatched ? "0" : "1"};
    transition: opacity 1s ease-out 1s;
    will-change: opacity;
    outline: none;
    perspective: 1000px;
`;

const StyledFrontSide = styled.div<ColorProps & BorderProps & TypographyProps & isFaceUp>`
    position: relative;
    z-index: 1;
    display: block;
    padding: 10rem 2rem;
    transform: ${({ isFaceUp }) => isFaceUp ? "rotateY(0)" : "rotateY(-180deg)"};
    transition: transform 1s ease-out;
    backface-visibility: hidden;
    ${color};
    ${border};
    ${typography};
`;

const StyledBackSide = styled.div<ColorProps & BorderProps & isFaceUp>`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 0;
    display: block;
    transform: ${({ isFaceUp }) => isFaceUp ? "rotateY(0)" : "rotateY(-180deg)"};
    transition: transform 1s ease-out;
    ${color};
    ${border};
`;

const Card: FC<ICard & ICardEventHandler> = ({
    id,
    emoji,
    isMatched,
    isFaceUp,
    onClick
}) => {
    return (
        <StyledCard onClick={onClick} isMatched={isMatched}>
            <StyledFrontSide bg="black" borderRadius={3} fontSize={6} isFaceUp={isFaceUp}>
                { emoji }
            </StyledFrontSide>
            <StyledBackSide bg="black" borderRadius={3} isFaceUp={isFaceUp}/>
        </StyledCard>
    );
};

export default Card;
