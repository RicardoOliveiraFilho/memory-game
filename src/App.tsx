import { useEffect, useState } from 'react';
import { CardImage } from './types/cardImage';
import { Container, CardGrid } from './App.styles';

import { Card } from './components/Card';

const cardImages: CardImage[] = [
  { id: 0, src: '/images/helmet.png', matched: false },
  { id: 0, src: '/images/potion.png', matched: false },
  { id: 0, src: '/images/ring.png', matched: false },
  { id: 0, src: '/images/scroll.png', matched: false },
  { id: 0, src: '/images/shield.png', matched: false },
  { id: 0, src: '/images/sword.png', matched: false }
];

function App() {
  const [cards, setCards] = useState<CardImage[]>([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState<CardImage>();
  const [choiceTwo, setChoiceTwo] = useState<CardImage>();
  const [disabled, setDisabled] = useState(false);

  const shuffleCards = () => {
    const shuffledCards: CardImage[] = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    
    setChoiceOne(prevState => prevState = undefined);
    setChoiceTwo(prevState => prevState = undefined);
    setCards(shuffledCards);
    setTurns(0);
  }

  const handleChoice = (card: CardImage) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  }

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);

      if (choiceOne.src === choiceTwo.src) {
        setCards(prevCards => {
          return prevCards.map(card => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  useEffect(() => {
    shuffleCards();
  }, []);

  const resetTurn = () => {
    setChoiceOne(prevState => prevState = undefined);
    setChoiceTwo(prevState => prevState = undefined);
    setTurns(prevTurns => prevTurns + 1);
    setDisabled(false);
  }

  return (
    <Container>
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>

      <CardGrid>
        {cards.map(card => (
          <Card
            key={card.id}
            card={card}
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
            disabled={disabled}
          />
        ))}
      </CardGrid>
      <p>Turns: {turns}</p>
    </Container>
  );
}

export default App;