import { Button, VStack, Box } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { CardInfo, ListInfo } from './App';
import BoardCard from './BoardCard';

const BoardList = ({
  listInfo,
  spawnCard,
}: {
  listInfo: ListInfo;
  spawnCard: () => void;
}) => {
  const [cards, setCards] = useState<CardInfo[]>(listInfo.cards);

  useEffect(() => {
    setCards(listInfo.cards);
  }, [listInfo.cards]);

  const deleteCard = (id: number) => {
    setCards((prev) => prev.filter((c) => c.id !== id));
  };

  const updateCard = (id: number, text: string) => {
    setCards((prev) =>
      prev.map((c) => {
        if (c.id === id) {
          return { ...c, title: text };
        }
        return c;
      })
    );
  };

  return (
    <>
      <Box shadow={'md'} borderRadius={'15'} p={'1.5em'}>
        <Box fontWeight={'semibold'} textAlign={'start'} m={'1em'}>
          {listInfo.title}
        </Box>
        <VStack w={'16em'}>
          {cards.map((card) => (
            <BoardCard
              onChange={(e) => {
                updateCard(card.id, e.target.value.trim());
                return;
              }}
              onBlur={(e) => {
                if (!e.target.value.trim()) deleteCard(card.id);
              }}
              cardInfo={card}
              key={card.id}
            />
          ))}
        </VStack>
        <Button mt={'0.5em'} onClick={() => spawnCard()}>
          +
        </Button>
      </Box>
    </>
  );
};

export default BoardList;
