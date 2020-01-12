import React, { FC } from 'react';
import styled from 'styled-components';
import { flexbox, FlexboxProps } from 'styled-system';

const StyledFlex = styled.div<FlexboxProps>`
  ${flexbox};
  display: flex;
`;

const Flex: FC<FlexboxProps> = (props) => {
    return <StyledFlex {...props} />
};

export default Flex;
