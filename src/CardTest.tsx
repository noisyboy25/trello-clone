import {
  Button,
  Card,
  Text,
  CardBody,
  CardHeader,
  VStack,
  Container,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';

type CardInfo = {
  id: number;
  title: string;
  body: string;
};

const CardTest = ({ posts }: { posts: CardInfo[] }) => {
  const [cards, setCards] = useState<CardInfo[]>(posts);

  useEffect(() => {
    setCards(posts);
  }, [posts]);

  const spawnCard = (cardInfo?: CardInfo) => {
    const card = cardInfo || {
      id: Math.floor(Math.random() * 1000000),
      title: 'Test',
      body: 'Test description',
    };

    setCards((prev) => [...prev, card]);
  };

  return (
    <>
      <Container>
        <VStack>
          {cards.map((card) => (
            <Card key={card.id}>
              <CardHeader>{card.title}</CardHeader>
              <CardBody>
                <Text>{card.body}</Text>
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
