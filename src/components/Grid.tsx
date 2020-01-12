import React, { FC } from 'react';
import styled from 'styled-components';
import { grid, GridProps } from 'styled-system';

const StyledGrid = styled.div<GridProps>`
  ${grid};
  display: grid;
`;

const Grid: FC<GridProps> = (props) => {
    return <StyledGrid {...props} />
};

export default Grid;
