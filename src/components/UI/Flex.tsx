import React, { FC } from 'react';
import styled from 'styled-components';
import { space, SpaceProps, layout, LayoutProps, flexbox, FlexboxProps } from 'styled-system';

type StyledFlexProps = FlexboxProps & SpaceProps & LayoutProps;

const StyledFlex = styled.div<StyledFlexProps>`
  ${flexbox};
  ${space};
  ${layout};
  display: flex;
`;

const Flex: FC<StyledFlexProps> = (props) => {
    return <StyledFlex {...props} />
};

export default Flex;
