import React, { FC, MouseEvent } from 'react';
import styled from 'styled-components';
import { color, ColorProps, space, SpaceProps, border, BorderProps } from 'styled-system';

export interface IGameOver {
    onClick: (e: MouseEvent) => void;
}

const StyledGameOver = styled.button<ColorProps & SpaceProps & BorderProps>`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 6rem;
    font-family: inherit;
    cursor: pointer;
    ${color};
    ${space};
    ${border};
`;

const GameOver: FC<IGameOver> = ({ onClick }) => {
    return (
        <StyledGameOver onClick={onClick} bg="black" color="white" p={4} border="none" borderRadius={2}>
            Play again!
        </StyledGameOver>
    );
};

export default GameOver;
