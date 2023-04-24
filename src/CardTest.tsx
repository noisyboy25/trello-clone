import { Button, Card, Text, CardBody, VStack, Box } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { CardInfo, ListInfo } from './App';

const CardTest = ({ listInfo }: { listInfo: ListInfo }) => {
  const [cards, setCards] = useState<CardInfo[]>(listInfo.cards);

  useEffect(() => {
    setCards(listInfo.cards);
  }, [listInfo.cards]);

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
      <Box shadow={'md'} borderRadius={'15'} p={'1.5em'}>
        <Box fontWeight={'semibold'} textAlign={'start'} m={'1em'}>
          {listInfo.title}
        </Box>
        <VStack w={'16em'} m={'1em'}>
          {cards.map((card) => (
            <Card w={'16em'} key={card.id}>
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
      </Box>
    </>
  );
};

export default CardTest;
