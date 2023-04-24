import './App.css';
import { Button, Flex } from '@chakra-ui/react';
import CardList from './CardTest';
import { useEffect, useState } from 'react';
import { randomId } from './util';

type Post = {
  id: number;
  title: string;
  body: string;
};

export type CardInfo = {
  id: number;
  title: string;
  description: string;
};

export type ListInfo = {
  id: number;
  title: string;
  cards: CardInfo[];
};

function App() {
  const [cards, setCards] = useState<CardInfo[]>([]);
  const [lists, setLists] = useState<ListInfo[]>([]);

  useEffect(() => {
    let ignore = false;

    const fetchPosts = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      const cards: CardInfo[] = (await res.json()).map((post: Post) => ({
        id: post.id,
        title: post.title,
        description: post.body,
      }));
      if (!ignore) {
        setCards(cards);
        setLists([
          {
            id: 1,
            title: 'Test List',
            cards: [cards[0]],
          },
        ]);
      }
      console.log(cards[0]);
    };

    fetchPosts();

    return () => {
      ignore = true;
    };
  }, []);

  const spawnList = () => {
    setLists((prev) => [
      ...prev,
      { id: randomId(), title: 'New List', cards: [] },
    ]);
  };

  return (
    <>
      <Flex>
        {cards.length > 0 && (
          <>
            {lists.length > 0 &&
              lists.map((list) => (
                <CardList cards={list.cards} key={list.id} />
              ))}
            <Button onClick={() => spawnList()}>+</Button>
          </>
        )}
      </Flex>
    </>
  );
}

export default App;
