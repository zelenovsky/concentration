import React, { FC, MouseEvent } from 'react';
import styled from 'styled-components';
import { color, ColorProps, space, SpaceProps, border, BorderProps, typography, TypographyProps } from 'styled-system';

export interface IGameOver {
    onClick: (e: MouseEvent) => void;
}

const StyledGameOver = styled.button<ColorProps & SpaceProps & BorderProps & TypographyProps>`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: inherit;
    cursor: pointer;
    ${color};
    ${space};
    ${border};
    ${typography};
`;

const GameOver: FC<IGameOver> = ({ onClick }) => {
    return (
        <StyledGameOver onClick={onClick} bg="black" color="white" p={5} border="none" borderRadius={3} fontSize={6}>
            Play again!
        </StyledGameOver>
    );
};

export default GameOver;
