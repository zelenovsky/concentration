import React, { useState, useEffect } from 'react';

import Grid from './UI/Grid';
import Flex from './UI/Flex';
import Card, { ICard } from './Card';
import FlipsCounter from './FlipsCounter';
import GameOver from './GameOver';
import { idsFactory, randomChoice, shuffle } from '../helpers/helpers';
import emojiChoices from '../data/emojiChoices';

const Concentration: React.FC = () => {
    const [cards, setCards] = useState<ICard[]>([]);
    const [indexOfFaceUpCard, setIndexOfFaceUpCard] = useState<number | null>(null);
    const [flipsCount, setFlipsCount] = useState<number>(0);
    const [isGameOver, setIsGameOver] = useState<boolean>(false);
    const numberOfCards: number = 7;
    const numberOfPairsOfCards: number = (numberOfCards + 1) / 2;

    const chooseCard = (index: number): void => {
        const tempCards = [...cards];
        const chosenCard = tempCards[index];

        chosenCard.isFaceUp = true;
        if (indexOfFaceUpCard === null) {
            setIndexOfFaceUpCard(index);
        } else {
            const faceUpCards = tempCards.filter((card, i) => card.isFaceUp);
            if (faceUpCards.length === 3) {
                tempCards.forEach((card, i) => {
                    card.isFaceUp = (index === i);
                });
                setIndexOfFaceUpCard(index);
            } else if (tempCards[indexOfFaceUpCard].id === chosenCard.id && indexOfFaceUpCard !== index) {
                tempCards[indexOfFaceUpCard].isMatched = true;
                chosenCard.isMatched = true;
                // I don't like Timeout here, but I couldn't figure out something better
                setTimeout(() => {
                    tempCards.forEach((card) => {
                        card.isFaceUp = false;
                    });
                }, 1000);
                const notMatchedCards = tempCards.filter((card) => !card.isMatched);
                if (notMatchedCards.length === 0) {
                    setIsGameOver(true);
                }
                setIndexOfFaceUpCard(null);
            }
        }
        setCards(tempCards);
    };

    const createCards = () => {
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
    };

    useEffect(createCards, [numberOfPairsOfCards]);

    return (
        <>
            <Flex py={5} minHeight="100vh" alignItems="center" justifyContent="center" flexDirection="column">
                <FlipsCounter count={flipsCount} />
                <Grid
                    gridTemplateColumns={["1fr 1fr", "1fr 1fr 1fr"]}
                    gridGap={4}
                    width="100%">
                    { cards.map((card, index) =>
                        <Card
                            key={index}
                            id={card.id}
                            emoji={card.emoji}
                            isFaceUp={card.isFaceUp}
                            isMatched={card.isMatched}
                            onClick={() => {
                                setFlipsCount(flipsCount + 1);
                                chooseCard(index);
                            }}/>)}
                </Grid>
            </Flex>
            {
                isGameOver
                    ? <GameOver onClick={() => {
                        setIsGameOver(false);
                        setFlipsCount(0);
                        createCards();
                    }} />
                    : ""
            }
        </>
    );
};

export default Concentration;
