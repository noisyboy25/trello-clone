import './App.css';
import { Flex } from '@chakra-ui/react';
import CardList from './CardTest';
import { useEffect, useState } from 'react';

function App() {
  const [posts, setPosts] = useState<any[]>([]);
  useEffect(() => {
    let ignore = false;

    const fetchPosts = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      const posts = (await res.json()).slice(0, 1);
      if (!ignore) {
        setPosts(posts);
      }
    };

    fetchPosts();

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <>
      <Flex>
        <CardList posts={posts} />
        <CardList posts={posts} />
        <CardList posts={posts} />
      </Flex>
    </>
  );
}

export default App;
