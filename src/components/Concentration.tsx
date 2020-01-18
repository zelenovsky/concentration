import React from 'react';
import styled from 'styled-components';
import { space, SpaceProps } from 'styled-system';

import Container from './Container';
import Grid from './Grid';
import Card from './Card';
import emojiChoices from '../data/emojiChoices';

const StyledConcentration = styled.div<SpaceProps>`
  ${space};
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

let idsFactory: number = 0;

const Concentration: React.FC = () => {
    return (
        <Container maxWidth={1}>
            <StyledConcentration py={5}>
                <Grid
                    gridTemplateColumns={["1fr 1fr", "1fr 1fr 1fr"]}
                    gridGap={2}
                    width="100%"
                    height="100%"
                >
                    { emojiChoices.map(emoji => <Card key={idsFactory += 1} content={emoji} />) }
                </Grid>
            </StyledConcentration>
         </Container>
    );
};

export default Concentration;
