import './App.css';
import { Flex } from '@chakra-ui/react';
import CardList from './CardTest';
import { useEffect, useState } from 'react';

export type CardInfo = {
  id: number;
  title: string;
  description: string;
};

function App() {
  const [cards, setCards] = useState<CardInfo[]>([]);
  useEffect(() => {
    let ignore = false;

    const fetchPosts = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      const cards: CardInfo[] = (await res.json()).map((post: any) => ({
        id: post.id,
        title: post.title,
        description: post.body,
      }));
      if (!ignore) {
        setCards(cards);
      }
      console.log(cards[0]);
    };

    fetchPosts();

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <>
      <Flex>
        {cards.length > 0 && (
          <>
            <CardList cards={[cards[0]]} />
            <CardList cards={[cards[1]]} />
            <CardList cards={[cards[2]]} />
          </>
        )}
      </Flex>
    </>
  );
}

export default App;
