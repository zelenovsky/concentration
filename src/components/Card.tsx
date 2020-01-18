import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { color, ColorProps, border, BorderProps } from 'styled-system';

export interface CardProps {
    emoji?: string;
    isFaceUp?: boolean;
    isMatched?: boolean;
}

const StyledCard = styled.button.attrs(() => ({
    type: "button"
}))<CardProps>`
    position: relative;
    display: block;
    padding: 0;
    cursor: pointer;
    pointer-events: ${({ isMatched }) => isMatched ? "none" : "all"};
    border: none;
    background-color: transparent;
    opacity: ${({ isMatched }) => isMatched ? "0" : "1"};
    transition: opacity .3s ease-out 1s;
`;

const StyledFrontSide = styled.div<ColorProps & BorderProps & CardProps>`
    position: relative;
    z-index: 1;
    display: block;
    padding: 8rem 2rem;
    font-size: 6rem;
    transform: ${({ isFaceUp }) => isFaceUp ? "rotateY(0)" : "rotateY(-180deg)"};
    transition: transform 1s ease-out;
    backface-visibility: hidden;
    ${color};
    ${border};
`;

const StyledBackSide = styled.div<ColorProps & BorderProps & CardProps>`
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

const Card: FC<CardProps> = ({ emoji }) => {
    const [isFaceUp, setIsFaceUp] = useState<boolean>(false);
    const [isMatched, setIsMatched] = useState<boolean>(false);

    const handleClick = () => {
        setIsFaceUp(!isFaceUp);
        setIsMatched(!isMatched);
    };

    return (
        <StyledCard onClick={handleClick} isMatched={isMatched}>
            <StyledFrontSide bg="black" borderRadius={2} isFaceUp={isFaceUp}>
                { emoji }
            </StyledFrontSide>
            <StyledBackSide bg="black" borderRadius={2} isFaceUp={isFaceUp}/>
        </StyledCard>
    )
};

export default Card;
