import {
  Button,
  Card,
  Text,
  CardBody,
  VStack,
  Container,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { CardInfo } from './App';

const CardTest = (props: { cards: CardInfo[] }) => {
  const [cards, setCards] = useState<CardInfo[]>(props.cards);

  useEffect(() => {
    setCards(props.cards);
  }, [props.cards]);

  const spawnCard = (cardInfo?: CardInfo) => {
    const card = cardInfo || {
      id: Math.floor(Math.random() * 1000000),
      title: 'Test',
      description: 'Test description',
    };

    setCards((prev) => [...prev, card]);
  };

  return (
    <>
      <Container>
        <VStack>
          {cards.map((card) => (
            <Card key={card.id}>
              {/* <CardHeader>{card.title}</CardHeader> */}
              <CardBody>
                <Text>{card.description}</Text>
              </CardBody>
            </Card>
          ))}
        </VStack>
        <Button mt={'0.5em'} onClick={() => spawnCard()}>
          +
        </Button>
      </Container>
    </>
  );
};

export default CardTest;
