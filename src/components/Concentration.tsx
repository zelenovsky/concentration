import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { space, SpaceProps } from 'styled-system';

import Grid from './UI/Grid';
import Card, { ICard } from './Card';
import emojiChoices from '../data/emojiChoices';

const StyledConcentration = styled.div<SpaceProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  perspective: 1000px;
  ${space};
`;

const idsFactory = (): () => number => {
    let count = 0;
    return () => {
        count += 1;
        return count;
    }
};

const emoji = (emojiChoices: string[]): string => {
    const rand = Math.random() * emojiChoices.length;
    const indexToRemove = Math.floor(rand);
    return emojiChoices.splice(indexToRemove, 1)[0];
};

const shuffleCards = (cards: ICard[]) => {
    let shuffledCards: ICard[] = [...cards];
    let currentIndex: number = cards.length;
    let temporaryValue: ICard = cards[0];
    let randomIndex: number = 0;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * cards.length);
        currentIndex -= 1;
        temporaryValue = shuffledCards[currentIndex];
        shuffledCards[currentIndex] = shuffledCards[randomIndex];
        shuffledCards[randomIndex] = temporaryValue;
    }
    return shuffledCards;
};

const Concentration: React.FC = () => {
    const [cards, setCards] = useState<ICard[]>([]);
    const numberOfCards: number = 7;
    const numberOfPairsOfCards: number = (numberOfCards + 1) / 2;

    useEffect(() => {
        const id = idsFactory();
        let tempCards: ICard[] = [];
        for (let i = 0; i < numberOfPairsOfCards; i++) {
            const newCard: ICard = {
                id: id(),
                emoji: emoji(emojiChoices),
                isFaceUp: false,
                isMatched: false
            };
            tempCards = [...tempCards, newCard, newCard];
        }
        tempCards = shuffleCards(tempCards);
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
                        isMatched={card.isMatched}/>)}
            </Grid>
        </StyledConcentration>
    );
};

export default Concentration;
