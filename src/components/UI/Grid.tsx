import React, { FC } from 'react';
import styled from 'styled-components';
import { grid, GridProps, layout, LayoutProps } from 'styled-system';

type StyledGridProps = GridProps & LayoutProps;

const StyledGrid = styled.div<StyledGridProps>`
  ${grid};
  ${layout};
  display: grid;
`;

const Grid: FC<StyledGridProps> = (props) => {
    return <StyledGrid {...props} />
};

export default Grid;
