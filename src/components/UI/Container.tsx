import React, { FC } from 'react';
import styled from 'styled-components';
import { layout, LayoutProps, space, SpaceProps } from 'styled-system';

const StyledContainer = styled.div<LayoutProps & SpaceProps>`
  ${space}
  ${layout}
`;

const Container: FC<LayoutProps> = (props) => {
    return <StyledContainer mx="auto" px={6} {...props} />
};

export default Container;
