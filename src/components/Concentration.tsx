import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { space, SpaceProps } from 'styled-system';

import Grid from './UI/Grid';
import Card, { ICard } from './Card';
import { idsFactory, randomChoice, shuffle } from '../helpers/helpers';
import emojiChoices from '../data/emojiChoices';

const StyledConcentration = styled.div<SpaceProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  perspective: 1000px;
  ${space};
`;

const Concentration: React.FC = () => {
    const [cards, setCards] = useState<ICard[]>([]);
    const [indexOfFaceUpCard, setIndexOfFaceUpCard] = useState<number | undefined>(undefined);
    const numberOfCards: number = 7;
    const numberOfPairsOfCards: number = (numberOfCards + 1) / 2;

    const chooseCard = (index: number): void => {
        const tempCards = [...cards];
        const chosenCard = tempCards[index];
        // if (!chosenCard.isMatched) {
        //     if (indexOfFaceUpCard !== index) {
        //         if (tempCards[indexOfFaceUpCard].id === chosenCard.id) {
        //             tempCards[indexOfFaceUpCard].isMatched = true;
        //             chosenCard.isMatched = true;
        //         }
        //         chosenCard.isFaceUp = true;
        //     } else {
        //         setIndexOfFaceUpCard(index);
        //     }
        // }
        setCards(tempCards);
    };

    useEffect(() => {
        const id = idsFactory();
        let tempCards: ICard[] = [];
        for (let i = 0; i < numberOfPairsOfCards; i++) {
            const newCard: ICard = {
                id: id(),
                emoji: randomChoice(emojiChoices),
                isFaceUp: false,
                isMatched: false
            };
            tempCards = [...tempCards, { ...newCard }, { ...newCard }];
        }
        tempCards = shuffle(tempCards);
        setCards(tempCards);
    }, [numberOfPairsOfCards]);

    return (
        <StyledConcentration py={5}>
            <Grid
                gridTemplateColumns={["1fr 1fr", "1fr 1fr 1fr"]}
                gridGap={2}
                width="100%"
                height="100%">
                { cards.map((card, index) =>
                    <Card
                        key={index}
                        id={card.id}
                        emoji={card.emoji}
                        isFaceUp={card.isFaceUp}
                        isMatched={card.isMatched}
                        onClick={() => chooseCard(index)}/>)}
            </Grid>
        </StyledConcentration>
    );
};

export default Concentration;
